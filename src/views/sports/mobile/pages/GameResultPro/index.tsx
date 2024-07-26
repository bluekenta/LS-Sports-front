import {useSelector} from 'react-redux';
import React from 'react';
import {useUpdateEffect} from 'react-use';
import {useLocation} from 'react-router-dom';
import dayjs from 'dayjs';

import pageWrapper from '@this/components/PageWrapper';
import FilterPanel from './components/FilterPanel';
import useGamesResultInit from '@core/hooks/sports/useGamesResultInit';
import MatchTypeSelector, {DatePicker} from './components/MatchTypeSelector';
import SportTypeSelector from './components/SportTypeSelector';
import LeagueList from './components/LeagueList';
import ChampionList from './components/ChampionList';
import TStore from '@core/reducers/_reduxStore.d';
import {MatchListSkeleton} from '@this/shadow/Skeleton';
import usePublicState from '@core/hooks/usePublicState';
import useSettings from '@core/hooks/sports/useSettings';
import {isESports} from '@core/utils';
import {EESportType} from '@core/constants/enum/sport';
import Empty from '@this/shadow/Empty';
import MatchDetail from './components/MatchDetail';
import 'swiper/css';
import style from './style.module.scss';
import {useGameResultListData} from '@core/hooks/sports/useRenderData';

const GameResult = React.memo(() => {
  // const {
  //   showFilter,
  //   setShowFilter,
  //   isDetail,
  //   closeDetail,
  // } = useGameResult();
  const {switchGameResultPageInfo, getChampionResult} = useSettings();
  const displayType = useSelector((state: TStore) => state.sport.display.displayType);
  const [time, setTime] = React.useState(dayjs().format('YYYY/MM/DD'));
  const [matchType, setMatchType] = React.useState<number>(0);
  const [sportId, setSportId] = React.useState(1);
  const [hasQuery, setHasQuery] = React.useState(false);
  const {dispatch, ACTIONS} = usePublicState();
  const {state} = useLocation();
  const {showFilter, setShowFilter} = useGameResultListData();
  React.useEffect(() => {
    if (state && Object.keys(state).length > 0) {
      const {beginTime}: any = state;
      setHasQuery(true);
      setSportId(Number(sportId));
      setTime(dayjs(beginTime).format('YYYY/MM/DD'));
    }
  }, []);
  React.useEffect(() => {
    setSportId(matchType !== 1 ? 1 : 276);
  }, [matchType]);

  const getGameResultDataCallback = (res: any) => {
    if (!res.data.list.length) {
      dispatch(ACTIONS.SPORT.updateDisplayType('empty'));
    } else {
      dispatch(ACTIONS.SPORT.updateDisplayType('list'));
    }
  };
  const gameResultPageInfo = {
    sportId,
    beginTime: time,
    endTime: time,
    pageNum: 1,
    pageSize: 1000,
  };
  const getGameResultData = ()=> {
    switchGameResultPageInfo(gameResultPageInfo, getGameResultDataCallback);
  };
  const getQueryGameResultData = ()=> {
    const {homeTeamNameCn, leagueName}: any = state;
    switchGameResultPageInfo({
      ...gameResultPageInfo,
      leagueName,
      matchName: homeTeamNameCn,
    }, getGameResultDataCallback);
  };

  const {gameResultOpts}= useGamesResultInit(gameResultPageInfo, 'saiguo');
  const [opts, setOpts] = React.useState(gameResultOpts);
  React.useEffect(() => {
    if (!matchType) {
      setOpts(gameResultOpts.filter((opt) => (opt.value < 100)));
    } else {
      setOpts(gameResultOpts.filter((opt) => (opt.value > 100)));
    }
  }, [matchType, gameResultOpts]);

  useUpdateEffect(() => {
    matchType === 2 ? getChampionResult(gameResultPageInfo) : hasQuery ? getQueryGameResultData() : getGameResultData();
  }, [time, sportId]);

  React.useEffect(() => {
    if (isESports()) {
      setSportId(EESportType.LOL);
    }
  }, []);
  React.useEffect(() => {
    if (matchType === 2) {
      getChampionResult(gameResultPageInfo);
    }
  }, [matchType]);

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <MatchTypeSelector matchType={matchType} setMatchType={setMatchType} />
        <DatePicker handelGetTime={setTime} sportId={sportId} currentTime={time}/>
        {matchType !== 2 && (
          <SportTypeSelector opts={opts} sportId={sportId} handelGetTime={setTime} handleSportId={setSportId} />
        )}
      </div>
      {
        displayType === 'list' && <div id='BScroll_wrapper' className={style.BScroll_wrapper}>
          {matchType !== 2 ? (
            <LeagueList sportId={sportId} setShowFilter={setShowFilter} />
          ) : (
            <ChampionList />
          )}
        </div>
      }
      {
        displayType === 'skeleton' && <div className={style.skeleton_wrapper}>
          <MatchListSkeleton />
        </div>
      }
      {
        displayType==='empty' && <div className={style.empty_wrapper}>
          <Empty />
        </div>
      }
      <FilterPanel
        display={showFilter}
        close={() => setShowFilter(false)}
      />
      <MatchDetail
        sportId={sportId}
      />
    </div>
  );
});

export default pageWrapper(GameResult, {title: 'DP体育'});
