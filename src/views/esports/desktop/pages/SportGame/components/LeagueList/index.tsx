import {useMemo, useRef} from 'react';
import classnames from 'classnames';
import {useActivate, useUnactivate} from 'react-activation';
import {useSelector} from 'react-redux';
// import dayjs from 'dayjs';

import {useLeagueListData, useMatchListData} from '@core/hooks/sports/useRenderData';
import DpSkeleton from '@this/components/Skeleton';
import {TMatch} from '@core/services/Table';
import Empty from '@this/components/Empty';
import {EMatchTypes} from '@constants/enum/sport';
import TStore, {TLeagueStatistic} from '@core/reducers/_reduxStore.d';
import usePublicState from '@core/hooks/usePublicState';
import storage from '@core/helpers/storage';
import useSettings from '@core/hooks/sports/useSettings';
import LeagueItem from './LeagueItem';
import {Flex} from 'antd';
import styles from './style.scss';
import {DpIcon} from '@views/esports/desktop/components';

export default React.memo(() => {
  const {leagues} = useLeagueListData();
  const {matchList} = useMatchListData();
  const {isCollapseUpcoming, toggleCollapseLeagueByMatchType} = useSettings();

  const {dispatch, ACTIONS} = usePublicState();
  const {sportId} = useSelector((state: TStore) => state.sport.userSettings);
  const currentLeagueId = useSelector((state: TStore) => state.sport.display.currentLeagueId);
  const {displayType} = useSelector((state: TStore) => state.sport.display);
  const matchType = useSelector((state: TStore) => state.sport.userSettings.matchType);
  const cacheLeagueList: TLeagueStatistic[] = useMemo(() => storage.getAny(`${sportId}_league_list`), [sportId]);
  const cacheMatchList: TMatch[] = useMemo(() => storage.getAny(`${sportId}_match_list`), [sportId]);
  const wrapRef = useRef<HTMLDivElement>(null);

  useActivate(() => {
    dispatch(ACTIONS.BASE.updateIsInsideMatchList(true));
  });
  useUnactivate(() => {
    dispatch(ACTIONS.BASE.updateIsInsideMatchList(false));
  });

  if (
    displayType == 'skeleton' &&
    (matchType === EMatchTypes.EARLY || !cacheLeagueList?.length || !cacheMatchList?.length)
  ) {
    return (
      <div className={styles.skeleton}>
        <DpSkeleton type='match' length={3} />
      </div>
    );
  }

  if (displayType === 'empty') {
    return (
      <div className='empty-wrapper center'>
        <Empty />
      </div>
    );
  }

  const displyLeagues = _.filter(leagues, (item): boolean => {
    if (_.isEmpty(currentLeagueId)) {
      return true;
    }
    if (_.find(currentLeagueId, {id: item.leagueId, key: item.state})) {
      return true;
    }
    return false;
  });

  const onToggle = (type: EMatchTypes) => {
    toggleCollapseLeagueByMatchType(type);
    const el = document.querySelector(`.${type}-first`) as HTMLDivElement;
    if (el) {
      if (
        type !== matchType &&
        document
          .querySelector(`.${type === EMatchTypes.IN_PLAY ? EMatchTypes.UPCOMING : EMatchTypes.IN_PLAY}-end`)
          ?.getBoundingClientRect().top > 154
      )
        return;
      if (wrapRef.current) wrapRef.current.scrollTop = el.offsetTop - 40;
    }
  };

  // 滚球盘关， 未开赛去掉滚球盘
  const leaguesGroupBy = _.groupBy(
    _.orderBy(
      displayType == 'skeleton' ? cacheLeagueList : displyLeagues,
      ['state'],
      [[EMatchTypes.IN_PLAY, EMatchTypes.TODAY].includes(matchType) ? 'asc' : 'desc'],
    ),
    'state',
  );

  return (
    <Flex vertical className={classnames(styles.wrapper, 'match-list-wrap')} ref={wrapRef}>
      {_.map(leaguesGroupBy, (leaguesGroup: Array<TLeagueStatistic>, key: EMatchTypes) => (
        <Flex vertical key={key}>
          {matchType === EMatchTypes.CHAMPION && (
            <div
              className={classnames('play-type-wrapper', 'play-type-wrapper--champion', 'pointer', {
                'is-closed': !isCollapseUpcoming,
              })}
              onClick={() => onToggle(key)}>
              <span className={'caret-icon'}>
                <DpIcon type='leftcaret2' width={12} height={12} />
              </span>
              <span>冠军&nbsp;[{leaguesGroup.length}]</span>
            </div>
          )}
          {leaguesGroup.map((league) => (
            <LeagueItem
              key={`${key}-${league.leagueId}`}
              matches={_.groupBy(matchList, 'leagueId')[league.leagueId]}
              cacheMatches={_.groupBy(cacheMatchList, 'leagueId')[league.leagueId]}
              leagueId={league.leagueId}
              leagueIcon={league.leagueIcon}
              leagueName={league.leagueName}
              state={key}
              countGroup={league.countGroup}
              matchIds={league.matchIds}
              sportId={league.sportId}
              isCache={displayType === 'skeleton'}
              isChampion={matchType === EMatchTypes.CHAMPION}
              watchInView
            />
          ))}
        </Flex>
      ))}
      {displayType === 'list' && <div className='no-more'>没有更多数据了</div>}
    </Flex>
  );
});
