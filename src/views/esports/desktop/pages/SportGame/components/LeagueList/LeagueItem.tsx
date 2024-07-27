import {useMemo} from 'react';
import {useInView} from 'react-intersection-observer';
import {useUnmount} from 'react-use';
import classnames from 'classnames';
import DpIcon from '@this/components/Icon';
import DpImage from '@this/components/Image';

import useSettings from '@core/hooks/sports/useSettings';
import useEventEmitter from '@core/hooks/useEventEmitter';
import useFavorites from '@core/hooks/sports/useFavorites';
import {TMatch} from '@core/services/Table';
import DpSkeleton from '@this/components/Skeleton';
import {EMatchTypes} from '@constants/enum/sport';
import {TMitt} from '@constants/enum/mitt';
import MatchItemOfNoob from '../MatchItemOfNoob';
import ChampionItem from '../ChampionItem';
import dayjs from 'dayjs';

interface ILeagueItem {
  matches: Array<TMatch>;
  leagueId: number;
  leagueName: React.ReactNode;
  leagueIcon: string;
  state?: EMatchTypes;
  countGroup?: {[key in EMatchTypes]?: number};
  watchInView?: boolean;
  sportId?: number;
  isCache?: boolean;
  isChampion?: boolean;
  cacheMatches?: Array<TMatch>;
  open?: boolean;
  matchIds?: {
    [key in EMatchTypes]?: number[];
  },
}

export default React.memo(({leagueId, leagueIcon, leagueName, matches, state, matchIds, sportId, watchInView, isCache, isChampion, cacheMatches, open}: ILeagueItem) => {
  const {ref, inView} = useInView({threshold: 0});
  const {emit} = useEventEmitter<TMitt['syncMatchPollingLeagueIds']>({mittName: 'syncMatchPollingLeagueIds'});
  const {toggleCollapseLeague, collapseLeagueIds} = useSettings();
  const {isFavorite, onToggleFavorite} = useFavorites();

  useUnmount(() => {
    emit({leagueIds: [leagueId], display: false, state});
  });

  React.useEffect(() => {
    if (watchInView && !isCache) {
      emit({leagueIds: [leagueId], display: inView, state});
    }
  }, [inView, isCache]);

  const list = matches?.length ? matches : cacheMatches;

  let matchWithState = list;

  if (state) {
    matchWithState = list?.filter((item) => {
      return item.isLive === (state === EMatchTypes.IN_PLAY) && matchIds[state]?.includes(item.matchId);
    });
  }

  // 状态前缀
  const statePrefix = state || 'fav';

  const lg = useMemo(() => {
    if (!matches?.length) return leagueIcon;
    const sportId = matches[0].sportId;
    try {
      return require(`@this/pages/SportGame/components/MenuSidePanel/i/${sportId}-active.webp`);
    } catch {
      return leagueIcon;
    }
  }, [matches]);

  const isC = useMemo(() => {
    return isChampion || matches?.some((item) => item.isChampion);
  }, [isChampion, matches]);

  const matchIdsInLeague = matchIds ? matchIds[state] : _.map(list, (i) => i.matchId);

  return (
    <>
      {isC && matches && matches.length > 0 && (
        <div className={classnames('league-wrapper', {'opened': _.includes(collapseLeagueIds, `${statePrefix}#${leagueId}`)})} onClick={() => toggleCollapseLeague({leagueId: `${statePrefix}#${leagueId}`, isRequestData: !list})}>
          <div className="league-info">
            <DpImage className="league" src={lg} type="league" />
            <p className="league-name no-wrap">
              {leagueName}
              {
                isC && matches?.length &&
                <span className="ml-10">{dayjs(matches[0].matchClock.startTime).format('YYYY年MM月DD日 HH:mm')}</span>
              }
            </p>
          </div>
          <div className="action">
            <DpIcon type="collect2" active={isFavorite(matchIdsInLeague)} onClick={(e) => onToggleFavorite(e, matchIdsInLeague)} />
          </div>
        </div>
      )}

      {(_.includes(collapseLeagueIds, `${statePrefix}#${leagueId}`) || isCache || open) &&
        <div className='match-items-wrapper' ref={ref}>
          {!list &&
            <div style={{padding: '14px', paddingBottom: '1px'}}>
              <DpSkeleton type="match" length={1} />
            </div>}
          {matchWithState?.length > 0 &&
            <>
              {
                matchWithState.map((item: TMatch) => item.isChampion ? <ChampionItem match={item} key={item.matchId} /> : <MatchItemOfNoob key={item.matchId} match={item} leagueName={leagueName} lg={lg} />,
                )
              }
            </>
          }
        </div>
      }
    </>
  );
});
