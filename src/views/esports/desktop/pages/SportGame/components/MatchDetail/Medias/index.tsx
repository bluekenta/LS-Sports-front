import {useLatest} from 'react-use';
import classnames from 'classnames';
import useMathMedia from '@core/hooks/sports/useMathMedia';
import useEventEmitter from '@core/hooks/useEventEmitter';
import DpIcon from '@views/esports/desktop/components/Icon';
import Live from './Live';
import {TMatch} from '@core/services/Table';
import {TMitt} from '@constants/enum/mitt';
import ScoreComponent from './ScoreComponent';
import {useEffect, useMemo} from 'react';
import usePublicState from '@core/hooks/usePublicState';
import {useSelector} from 'react-redux';
import TStore from '@core/reducers/_reduxStore';
import styles from './style.scss';
import useMatchDetail from '@core/hooks/sports/useMatchDetail';
import {getMatchStatusByPeriod, isEsportsById} from '@core/utils';
import Timer from '@views/esports/desktop/components/Timer';
import DpRefreshIcon from '@views/esports/desktop/components/Refresh';

interface IProps {
  match: TMatch;
}
export default ({match}: IProps) => {
  const {matchDetail, detailUpdateTime} = useMatchDetail();
  const {mediaData, mediaAvailableStatus} = useMathMedia({matchId: match?.mid1, videoId: match?.pdId});
  const [selected, setSelected] = React.useState<TMitt['syncMediaSelected']['selected'] | null>(
    sessionStorage.getItem('media') as any,
  );
  const {setIsReload, isReload} = useMatchDetail();
  const [isShowTV, setIsShowTV] = React.useState(true);
  const {dispatch, ACTIONS} = usePublicState();
  const [random, setRandom] = React.useState(0);
  const fullScreen = useSelector((state: TStore) => state.sport.display.fullScreen);
  // 最新的比赛数据同步给Emmiter
  const latestMatch = useLatest(match);
  // 最后一次订阅的对象
  const lastSubscribe = React.useRef<TMitt['syncMediaSelected']>({matchId: null, selected: null});

  const {emit} = useEventEmitter<TMitt['syncMediaSelected']>({
    mittName: 'syncMediaSelected',
    on: (data) => {
      setSelected(data.selected);
      if (data.matchId !== latestMatch.current.matchId) {
        sessionStorage.setItem('media', data.selected || '');
        lastSubscribe.current = data;
        dispatch(ACTIONS.SPORT.updateCurrentMatch({matchId: data.matchId}));
        return;
      }
    },
  });

  const {emit: initEmit} = useEventEmitter<TMitt['syncMediaData']>({mittName: 'syncMediaData'});
  let timer: any = null;
  useEffect(() => {
    clearTimeout(timer);
    if (fullScreen && match?.matchId) {
      timer = setTimeout(() => {
        initEmit({
          matchId: match.matchId,
          mediaData,
          selected,
        });
      }, 100);
    }
  }, [fullScreen, match?.matchId, mediaData, selected]);

  React.useEffect(() => {
    if (lastSubscribe.current.matchId === match.matchId) {
      setSelected(lastSubscribe.current.selected);
      lastSubscribe.current = {matchId: null, selected: null};
      return;
    }
    if (isEsportsById(match.sportId)) {
      setSelected(mediaAvailableStatus[0]);
      emit({matchId: match.matchId, selected: mediaAvailableStatus[0]});
    } else {
      const sessionMedia: any = sessionStorage.getItem('media');
      let code: any = 'score';
      if ((sessionMedia && mediaAvailableStatus.includes(sessionMedia)) || selected) {
        code = sessionMedia || selected;
      }
      setSelected(code);
      emit({matchId: match.matchId, selected: code});
      if (mediaAvailableStatus.length) {
        sessionStorage.removeItem('media');
      }
    }
  }, [match?.matchId, mediaAvailableStatus]);

  const handleSelect = React.useCallback(
    (selected: TMitt['syncMediaSelected']['selected']) => {
      emit({matchId: match.matchId, selected});
      setSelected(selected);
    },
    [match, selected],
  );

  // const handleZoom = React.useCallback(() => {
  //   dispatch(ACTIONS.SPORT.updateDisplayFullScreen(true));
  // }, []);
  const handleTV = () => {
    setIsShowTV(!isShowTV);
  };
  const onOpenFull = () => {
    dispatch(ACTIONS.SPORT.updateDisplayZoomStatus(false));
    dispatch(ACTIONS.SPORT.toggleFullScreen({data: true}));
  };

  const hasList = useMemo(() => {
    let arr = isEsportsById(match?.sportId) ? [...mediaAvailableStatus] : ['score', ...mediaAvailableStatus];
    if (!match.isLive) arr = arr.filter((item) => item !== 'video');
    return arr;
  }, [match, mediaAvailableStatus]);

  const handleReload = () => {
    const startTime = Date.now();
    setIsReload(true);
    setRandom(random + 1);
    const requestEndTime = Date.now();
    setTimeout(() => {
      setIsReload(false);
    }, 2000 - (requestEndTime - startTime));
  };

  return (
    hasList.length > 0 && (
      <div className={classnames(styles.wrapper, {'tennis-animate': match.sportId === 3})}>
        <div className={classnames('match-detail-actions')}>
          <div className='flex-1 pointer btn-group'>
            <div className={`btns ${isShowTV && 'active-btn'}`} onClick={handleTV}>
              TV
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            {mediaData &&
              hasList.map((item, index) => (
                <DpIcon
                  className={classnames('pointer', {'mr-10': index + 1 !== hasList.length})}
                  active={selected === item}
                  type={item}
                  key={item}
                  onClick={() => handleSelect(item)}
                />
              ))}
          </div>
          <div className='icon-group flex-1 flex justify-end ddd items-center'>
            {!fullScreen && <DpIcon type='fullscreen2' className='pointer' onClick={onOpenFull} />}
            <DpRefreshIcon loading={isReload} handleRefresh={handleReload} />
          </div>
        </div>

        {isShowTV && !fullScreen && (
          <>
            <div className='team-info'>
              <div className='flex items-center'>
                <div className={classnames('sport-logo mr-10', `sid-${match.sportId}`, 'active')} />
                <p className='team-names'>
                  <span>{match.teams.home.name}</span>
                  <span className='vs'>VS</span>
                  <span>{match.teams.away.name}</span>
                </p>
              </div>
              <span className='period'>
                <span>
                  {matchDetail?.playTypes.length > 0 ? getMatchStatusByPeriod(matchDetail.matchClock.period) : '已结束'}
                </span>
                {matchDetail?.playTypes.length > 0 &&
                  !['FT', 'HT'].includes(matchDetail.matchClock.period?.toUpperCase()) &&
                  matchDetail.matchClock.second > 0 &&
                  (matchDetail.sportId === 1 ? (
                    <Timer
                      seconds={matchDetail.matchClock.second}
                      key={`${matchDetail?.matchId}_${matchDetail.matchClock.second}_${detailUpdateTime}`}
                    />
                  ) : (
                    matchDetail.matchClock.playTime
                  ))}
              </span>
            </div>
            {!fullScreen && (
              <div
                className={classnames(
                  'video-wrapper',
                  {'is-animate': selected === 'animation'},
                  `sport-${match.sportId}`,
                )}>
                {selected === 'score' && !!match && <ScoreComponent match={match} />}
                {selected === 'video' && match.isLive && mediaData?.videos?.length > 0 && (
                  <Live auto={match.sportId <= 33} videos={mediaData?.videos} key={random} />
                )}
                {selected === 'animation' && mediaData?.animation?.length > 0 && (
                  <iframe src={mediaData?.animation} key={random} />
                )}
              </div>
            )}
          </>
        )}
      </div>
    )
  );
};
