import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import classnames from 'classnames';
import {Flex, Tooltip} from 'antd';
import useMatchDetail from '@core/hooks/sports/useMatchDetail';
import DpIcon from '@views/esports/desktop/components/Icon';
import DpCollapse from '@views/kmg/desktop/components/Collapse';
import {PlayType, TOrder} from '@core/services/Table';
import {useOddTransfer} from '@core/hooks/sports/useOddTransfer';
import useOrderCart from '@core/hooks/sports/useOrderCart';
import Medias from './Medias';
import Statistician from './Statistician';
import {getNameByhoa, getPlayNameByKc, transferBoDan} from '@core/utils';
import styles from './style.scss';
import DpImage from '@this/components/Image';
import {useSelector} from 'react-redux';
import TStore from '@core/reducers/_reduxStore';
import useMatchStatistics from '@core/hooks/sports/useMatchStatistics';
import {EStaticsType, useOtherScoreIds} from '@core/constants/enum/sport';
import usePublicState from '@core/hooks/usePublicState';
import Empty from '@this/components/Empty/index';

export default React.memo(() => {
  const container = useRef<HTMLDivElement>(null);
  const {dispatch, ACTIONS} = usePublicState();
  const {matchDetail, currentMatchId, status} = useMatchDetail();
  const [gameTypeIndex, setGameTypeIndex] = useState(0);
  const [allOpen, setAllOpen] = useState(true);
  const {addAndRemoveOrder, orderTags} = useOrderCart();
  const {getViewOdd} = useOddTransfer();
  const getBoDanList = useCallback(transferBoDan, [matchDetail?.playTypes]);
  const swiperRef = useRef<SwiperRef>(null);
  const {zoomStatus} = useSelector((state: TStore) => state.sport.display);
  const {clearMatchDetailSta, getScoreByTypeId} = useMatchStatistics();
  const playListRef = useRef<HTMLDivElement>(null);

  const yellow = getScoreByTypeId(EStaticsType.yellow);
  const corner = getScoreByTypeId(EStaticsType.cornerKicks, matchDetail);
  const red = getScoreByTypeId(EStaticsType.red);
  const [notInit, setNotInit] = useState(false);
  const [, setSwiperWidth] = useState(0);

  useEffect(() => {
    setGameTypeIndex(0);
    if (swiperRef.current) {
      swiperRef.current.swiper?.slideTo(0);
    }
    clearMatchDetailSta();
  }, [currentMatchId]);
  useEffect(() => {
    if (!matchDetail) {
      if (notInit) {
        dispatch(ACTIONS.SPORT.updateDisplayFullScreen(false));
      }
      return;
    }
    setNotInit(true);
    if (swiperRef.current) {
      swiperRef.current.swiper?.slideTo(0);
      setSwiperWidth((swiperRef.current.children as Array<HTMLElement>)[0].getBoundingClientRect().width);
    }
    if (playListRef.current) playListRef.current.scrollTop = 0;
  }, [matchDetail?.matchId, notInit]);
  // 玩法统计
  const playStatistics = useMemo(() => {
    if (!matchDetail) return {};
    return matchDetail.playTypes?.reduce((a: {[key: number]: boolean}, b) => {
      b.playGroupIds?.forEach((pid: number) => {
        a[pid] = true;
      });
      return a;
    }, {});
  }, [matchDetail]);

  const playGroup = useMemo(() => {
    if (!matchDetail) return [];
    return matchDetail.playGroup.length ?
      [{name: '全部玩法', id: undefined}].concat(matchDetail.playGroup.filter((item) => playStatistics[item.id])) :
      [{name: '全部玩法', id: undefined}];
  }, [matchDetail]);

  const playList = useMemo(() => {
    if (!matchDetail) return [];
    const id = playGroup[gameTypeIndex]?.id;
    if (id === undefined) return matchDetail.playTypes;
    return matchDetail.playTypes.filter((item) => item.playGroupIds?.includes(id));
  }, [gameTypeIndex, matchDetail]);

  const onChangeSwiper = (idx: number) => {
    if (idx !== 1) {
      gameTypeIndex - idx > 0 ? swiperRef.current.swiper.slidePrev() : swiperRef.current.swiper.slideNext();
    }
    setGameTypeIndex(idx);
  };

  const getRender = (item: PlayType) => {
    const kc = item.code;
    if (kc.endsWith('_OU')) {
      return (
        <div className='play-content'>
          <div className='play-ou'>
            <div className='item-head fw-500'>
              <div />
              <div>大</div>
              <div>小</div>
            </div>
            {item.mks.map(
                (market) =>
                  market.ops.length && (
                    <div className={classnames('market-item')} key={market.mkId}>
                      <div className='label text-theme text-num'>{market.ops[0]?.betHandicap}</div>
                      {market.ops.map((bil) => (
                        <div
                          className={classnames('odd-item', _.includes(orderTags, bil.tag) ? 'active' : '', bil.change, {
                            disabled: !bil.available,
                          })}
                          key={bil.id}
                          onClick={() => addAndRemoveOrder(bil)}>
                          {bil.locked ? (
                          <Flex justify='center' align='center'><DpIcon type='lockcircle' /></Flex>
                        ) : bil.available ? (
                          <Tooltip title={getViewOdd(bil.od, bil.oddBetType)}>
                            <span className='odd'>{getViewOdd(bil.od, bil.oddBetType)}</span>
                          </Tooltip>
                        ) : (
                          <span>-</span>
                        )}
                        </div>
                      ))}
                    </div>
                  ),
            )}
          </div>
        </div>
      );
    } else if (['HT_CS', 'FT_CS'].includes(kc)) {
      return (
        <div className='play-content'>
          <div className='play-bd play-default'>
            <div className='item-head fw-500'>
              <div>{matchDetail.teams.home.name}</div>
              <div>平局</div>
              <div>{matchDetail.teams.away.name}</div>
            </div>
            <div className='bd-list'>
              {getBoDanList(item.mks[0].ops.filter((bil) => bil.name !== 'AOS')).map((bil, bidx) =>
                bil ? (
                  <OddItem bil={bil} kc={item.code} key={bil?.id || bidx} />
                ) : (
                  <div className='odd-item empty' key={bidx} />
                ),
              )}
            </div>
            <div className='other'>
              {item.mks[0].ops
                  .filter((bil) => bil.name === 'AOS')
                  .map((bil, bidx) =>
                  bil ? (
                    <OddItem
                      bil={{...bil, name: '其他', sportId: matchDetail.sportId}}
                      kc={item.code}
                      key={bil?.id || bidx}
                    />
                  ) : (
                    <div className='odd-item empty' key={bidx} />
                  ),
                  )}
            </div>
          </div>
        </div>
      );
    } else if (kc === 'FT_TTS') {
      return (
        <>
          <div className='play-title'>
            <div className='item-head fw-500'>
              <div className='text-center'>首个进球</div>
              <div className='text-center'>最后进球</div>
            </div>
          </div>
          <div className='play-default'>
            {item.mks.map((market) => (
              <div className='market-item r-2c' key={`${market.mkId}`}>
                {market.ops
                    .sort((a, b) => a.sortIndex - b.sortIndex)
                    .map((bil, idx) => (
                      <OddItem bil={bil} kc={item.code} key={bil?.id || idx} />
                    ))}
              </div>
            ))}
          </div>
        </>
      );
    } else {
      return (
        <div className='paly-content'>
          <div className='play-default'>
            {item.mks.map((market) => (
              <div
                className={classnames('market-item', {
                  'r-2c': kc.startsWith('hdp_') || market.ops.length > 3,
                  'one-line': kc.endsWith('_1X2'),
                })}
                key={market.mkId}>
                {market.ops
                    .sort((a, b) => a.sortIndex - b.sortIndex)
                    .map((bil, idx) => (
                      <OddItem bil={bil} kc={item.code} key={bil?.id || idx} showTeam />
                    ))}
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
  return matchDetail ? (
    <div className={styles.wrapper} ref={container}>
      <Medias match={matchDetail} key={matchDetail.matchId} />
      <div className={`game-info ${matchDetail.matchClock.period && matchDetail?.playTypes.length <= 0 && 'start'}`}>
        <div className={`team home ${matchDetail.matchClock.period && matchDetail?.playTypes.length <= 0 && 'start'}`}>
          <div className={classnames('team-detail', {'no-events': matchDetail.sportId !== 1})}>
            <div className='team-name'>
              <Tooltip title={matchDetail.teams.home.name}>{matchDetail.teams.home.name}</Tooltip>
            </div>
            <div className='events text-num'>
              <div className='event'>
                <img src={require('./i/concor.png')} alt='' />
                {corner[0]}
              </div>
              <div className='event'>
                <div className='red-card' />
                {red[0]}
              </div>
              <div className='event'>
                <div className='yellow-card' />
                {yellow[0]}
              </div>
            </div>
          </div>
          <DpImage
            key={matchDetail.matchId}
            sportId={matchDetail.sportId}
            size={30}
            className='team-logo'
            type='team'
            src={matchDetail.teams.home.icon}
          />
        </div>
        <div className='score'>
          {!matchDetail.matchClock.period ? (
            <div className='status'>
              <div className='progress'>未开赛</div>
              <div className="vs">VS</div>
            </div>
          ) : (
            <div className={matchDetail.matchClock.period && 'score-center'}>
              <div className='text-num'>
                {useOtherScoreIds.includes(matchDetail.sportId) ?
                      <div>
                        <span>
                          {
                            matchDetail.score.otherScore?.periods ?
                              matchDetail.score.otherScore?.periods?.slice(-1)[0]?.h ?? 0 :
                              0
                          }
                        </span>
                        <span className="vs">-</span>
                        <span>
                          {
                            matchDetail.score.otherScore?.periods ?
                              matchDetail.score.otherScore?.periods?.slice(-1)[0]?.a ?? 0 :
                              0
                          }
                        </span>
                      </div> :
                      <div>
                        <span>
                          {matchDetail.score.home ?? 0}
                        </span>
                        <span className="vs">-</span>
                        <span>
                          {matchDetail.score.away ?? 0}
                        </span>
                      </div>
                }
              </div>
            </div>
          )}
        </div>
        <div className={`team away ${matchDetail.matchClock.period && matchDetail?.playTypes.length <= 0 && 'start'}`}>
          <div className={classnames('team-detail', {'no-events': matchDetail.sportId !== 1})}>
            <div className='team-name'>
              <Tooltip title={matchDetail.teams.away.name}>{matchDetail.teams.away.name}</Tooltip>
            </div>
            <div className='events text-num'>
              <div className='event'>
                <img src={require('./i/concor.png')} alt='' />
                {corner[1]}
              </div>
              <div className='event'>
                <div className='red-card' />
                {red[1]}
              </div>
              <div className='event'>
                <div className='yellow-card' />
                {yellow[1]}
              </div>
            </div>
          </div>
          <DpImage
            key={matchDetail.matchId}
            size={30}
            className='team-logo'
            type='team'
            sportId={matchDetail.sportId}
            src={matchDetail.teams.away.icon}
          />
        </div>
      </div>
      {zoomStatus ? (
        <Statistician />
      ) : (
        <>
          <div className='play-type-list'>
            <div className='list-wrapper'>
              <div className={classnames('hexagon-wrapper', {active: gameTypeIndex === 0})}>
                {gameTypeIndex === 0 && <img src={require('./i/polygon-active.webp')} height={26} className='hexagon' alt="" />}
                <div
                  className={classnames('type-tab', {active: gameTypeIndex === 0})}
                  onClick={() => onChangeSwiper(0)}>
                  全部玩法
                </div>
              </div>
              <Swiper slidesPerView='auto' preventClicks={false} ref={swiperRef}>
                {playGroup.map(
                    (item, idx) =>
                      idx > 0 && (
                        <SwiperSlide key={idx}>
                          <div className={classnames('hexagon-wrapper', {active: gameTypeIndex === idx})}>
                            <div
                              className={classnames('type-tab', {active: gameTypeIndex === idx})}
                              onClick={() => onChangeSwiper(idx)}>
                              {item.name}
                            </div>
                            {gameTypeIndex === idx && <img src={require('./i/polygon-active.webp')} height={26} className='hexagon' alt="" />}
                          </div>
                        </SwiperSlide>
                      ),
                )}
                {/* {playGroup.map(
                    (item, idx) =>
                      idx > 0 && (
                        <SwiperSlide key={idx}>
                          <div className={classnames('hexagon-wrapper', {active: gameTypeIndex === idx})}>
                            <div
                              className={classnames('type-tab', {active: gameTypeIndex === idx})}
                              onClick={() => onChangeSwiper(idx)}>
                              {item.name}
                            </div>
                            {gameTypeIndex === idx && <img src={require('./i/polygon-active.webp')} height={26} className='hexagon' alt="" />}
                          </div>
                        </SwiperSlide>
                      ),
                )} */}
              </Swiper>
            </div>
            <div className='icon-wrap' onClick={() => setAllOpen((val) => !val)}>
              <DpIcon
                type='expand2hover'
                className={classnames(`pointer ${allOpen ? 'close-all-matchs' : 'open-all-matchs'}`)}
              />
            </div>
          </div>
          <div
            className={classnames('play-list is-esports', {'is-empty': !playList.length})}
            ref={playListRef}>
            {playList.map((item: PlayType) => (
              <DpCollapse
                allOpen={allOpen}
                className={classnames('play-item', {
                  'is-half': item.code.startsWith('HT_') || item.code.endsWith('SecondHalf'),
                })}
                header={
                  <div className='play-name'>
                    {item.code.endsWith('SecondHalf') && <span className='second-half'>下半场</span>}
                    {item.code.startsWith('HT_') && <span className='ht-half'>上半场</span>}
                    {getPlayNameByKc({code: item.code, name: item.name, ctid: item.ctid, sportId: matchDetail.sportId})}
                  </div>
                }
                key={`${item.name}_${item.code}`}>
                {getRender(item)}
              </DpCollapse>
            ))}
            {playList.length === 0 && (
              <div>
                <Empty />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  ) : (
    status === 'done' && (
      <div className='empty-center'>
        <Empty />
      </div>
    )
  );
});

export function OddItem({bil, kc, showTeam}: {bil: TOrder; kc: string; showTeam?: boolean}) {
  const {addAndRemoveOrder, orderTags} = useOrderCart();
  const {getViewOdd} = useOddTransfer();
  const render = () => {
    if (bil.ended) {
      return (
        <>
          {showTeam === true && bil.betTeam && bil.betTeam !== bil.name && <span>{getNameByhoa(bil.betTeam)}</span>}
          {bil.name && <span>{getNameByhoa(bil.name)}</span>}
          <DpIcon type='win' active={bil.win === 1} />
        </>
      );
    } else if (bil.locked) {
      return <Flex justify='center' align='center'><DpIcon type='lockcircle' /></Flex>;
    } else if (bil.available) {
      return (
        <>
          <div>
            {showTeam === true &&
              bil.betTeam &&
              bil.betTeam !== bil.name &&
              bil.betTeam !== 'Over' &&
              bil.betTeam !== 'Under' && (
              <Tooltip
                title={
                    bil.tag.split(/-/)[1].endsWith('_AH') ?
                      bil.betTeam?.toUpperCase() === 'HOME' ?
                        bil.teams.home.name :
                        bil.teams.away.name :
                      getNameByhoa(bil.betTeam)
                }>
                <span className='mw-60'>
                  {bil.tag.split(/-/)[1].endsWith('_AH') ?
                      bil.betTeam?.toUpperCase() === 'HOME' ?
                        bil.teams.home.name :
                        bil.teams.away.name :
                      getNameByhoa(bil.betTeam)}
                </span>
              </Tooltip>
            )}
            {bil.name && (
              <Tooltip title={getNameByhoa(bil.name, kc, bil)}>
                <span
                  className={classnames('ml-3 odd-name', {
                    'text-theme text-num': /^[+-]?[\d]+(?:\.\d+)?(?:[+\-*/]\d+(?:\.\d+)?)?$/.test(
                        getNameByhoa(bil.name),
                    ),
                  })}>
                  {getNameByhoa(bil.name, kc, bil)}
                </span>
              </Tooltip>
            )}
          </div>
          <span className={classnames('odd', {locked: bil.available})}>{getViewOdd(bil.od, bil.oddBetType)}</span>
        </>
      );
    } else {
      return <span>-</span>;
    }
  };
  return (
    <div
      className={classnames(
          'odd-item',
          {'active': _.includes(orderTags, bil.tag), 'disabled': !bil.available, 'justify-between': bil.ended},
          bil.change,
      )}
      key={bil.id}
      onClick={() => addAndRemoveOrder(bil)}>
      {render()}
    </div>
  );
}
