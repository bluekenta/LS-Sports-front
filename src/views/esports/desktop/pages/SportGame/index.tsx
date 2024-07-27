import useSportsGameInit from '@core/hooks/sports/useSportsGameInit';
import usePollInterval from '@core/hooks/sports/usePollInterval';
import pageWrapper from '../../components/PageWrapper';
import MenuSidePanel from './components/MenuSidePanel';
import AnnounceBar from './components/AnnounceBar';
import OptionBar from './components/OptionBar';
import MatchDetail from './components/MatchDetail';
import LeagueList from './components/LeagueList';
import MatchInfo from './components/MatchInfo';
import ZoomMatchDetail from './components/ZoomMatchDetail';
import KeepAlive from '@core/templates/desktop/components/KeepAlive';
import React from 'react';
import FavoriteDetail from './components/FavoriteDetail';
import {useSelector} from 'react-redux';
import TStore from '@core/reducers/_reduxStore';
import useEventEmitter from '@core/hooks/useEventEmitter';
import {TMitt} from '@core/constants/enum/mitt';
import BettingModeModalPopup from '@core/templates/desktop/components/PopupModal/bettingModeModalPopup';
import useSettings from '@core/hooks/sports/useSettings';
import {ALL_GAME_BETTING_TYPE, EGameType, EESportType} from '@constants/enum/sport';
import storage from '@helpers/storage';
import usePublicState from '@core/hooks/usePublicState';
import db from '@core/services/db';
import {isESports} from '@core/utils';
import {store} from '@core/templates/desktop/app';
import useUserInfoHooks from '@core/hooks/users/useUserInfoHooks';
import {Flex} from 'antd';
import styles from './style.scss';
import SearchDetail from './components/SearchDetail';

export const SportGame = React.memo(() => {
  useSportsGameInit();
  usePollInterval();
  const [openModal, setOpenModal] = React.useState(!storage.get('CUR_GAME_BETTING_TYPE'));
  const [loading, setLoading] = React.useState(false);
  const {gameBettingType, switchGameBettingByType, switchGameType} = useSettings();
  const {dispatch, ACTIONS} = usePublicState();
  useUserInfoHooks();
  let timer: any = 0;
  React.useEffect(() => {
    db.matches.clear().then(() => {
      // dispatch(ACTIONS.SPORT.updateCurrentMatch({matchId: null}));
      dispatch(ACTIONS.SPORT.updateMatchListUpdateTime());
    });
    clearTimeout(timer);
    timer = setTimeout(() => {
      switchGameType(EGameType.ESPORTS, EESportType.ALL);
    }, 100);
  }, []);

  return (
    <>
      <BettingModeModalPopup
        open={!isESports() && openModal}
        loading={loading}
        mode={ALL_GAME_BETTING_TYPE[1].code === gameBettingType ? 1 : 0}
        onCancel={() => setOpenModal(false)}
        onSelect={(mode) => {
          setLoading(true);
          switchGameBettingByType(ALL_GAME_BETTING_TYPE[mode].code);
          setOpenModal(false);
        }}
      />
      <div className={styles.wrapper}>
        <div className='container'>
          <MenuSidePanel />
          <div className='content'>
            <AnnounceBar />
            <div className='match-container'>
              <MainContent />
              <div className='match-detail'>
                <MatchDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default pageWrapper(SportGame, {title: 'DP电竞', withFooter: false, withHeader: true});


// 主体内容显示
export const MainContent = () => {
  const {sportId} = store.getState().sport.userSettings;

  const [showFavorite, setShowFavorite] = React.useState(false);
  useEventEmitter<TMitt['toggleFavorite']>({mittName: 'toggleFavorite', on: ({display}) => setShowFavorite(display)});
  const {zoomStatus, fullScreen, pagePath} = useSelector((state: TStore) => state.sport.display);
  const {hotLeague} = useSelector((state: TStore) => state.sport.display);

  if (fullScreen) {
    return <MatchInfo />;
  }

  return (
    <div className='match-list'>
      <KeepAlive key={pagePath} cacheKey='matchList'>
        <Flex vertical gap={10} className='container'>
          {
            !zoomStatus &&
            <div className={`hero-image e-${sportId}`} />
          }
          {zoomStatus ? <ZoomMatchDetail /> : showFavorite ? <FavoriteDetail /> : (
          <Flex vertical flex={1} style={{overflowY: 'auto'}}>
            <OptionBar />
            {
              hotLeague ? <SearchDetail /> : <LeagueList />
            }
          </Flex>
          )}
        </Flex>
      </KeepAlive>
    </div>
  );
};
