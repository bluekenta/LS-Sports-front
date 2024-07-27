import Marquee from 'react-fast-marquee';
import styles from './style.scss';
import LanguageDropdown from './components/LanguageDropdown';
import {useHistory} from 'react-router';
import useAnnouncementHooks from '@core/hooks/dashboard/useAnnouncementHooks';
import {ESportType} from '@core/constants/enum/sport';
// import SettingsDropdown from './components/SettingsDropdown';

export default React.memo(() => {
  const {datas} = useAnnouncementHooks({news: false, marquee: 1});
  const history = useHistory();
  const newsCategories: {[key: number]: string} = {
    0: '公告',
    [ESportType.DOTA]: 'DOTA 2',
    [ESportType.CSGO]: 'CS:GO/CS2',
    [ESportType.LOL]: '英雄联盟',
    [ESportType.KING]: '王者荣耀',
    [ESportType.VALORANT]: '无畏契约',
    [ESportType.Overwatch]: '守望先锋',
    // [ESportType.BattleCanyon]: 'LOL:激斗峡谷',
    // [ESportType.EternalCalamity]: '永劫无间',
    // [ESportType.Endless]: '无尽对决',
    // [ESportType.MMA]: 'MMA',
    // [ESportType.PUBG]: '绝地求生',
    // [ESportType.Crossfire]: '穿越火线',
    // [ESportType.StarCraft]: '星际争霸II',
    // [ESportType.RocketLeague]: '火箭联盟',
    // [ESportType.RainbowSix]: '彩虹六号',
    // [ESportType.Hearthstone]: '炉石传说',
    // [ESportType.FIFA]: 'FIFA',
    // [ESportType.CallOfDuty]: '使命召唤',
    // [ESportType.Warcraft]: '魔兽争霸3',
  };

  return (
    <div className={styles.wrapper}>
      <div className='flex items-center'>
        <div className='btn' onClick={() => history.push('/announcement')}>
          <img src={require('./i/speaker.webp')} alt='' />
        </div>
        <div className='marquee_wrap' onClick={() => history.push('/announcement')}>
          <Marquee pauseOnHover speed={60} loop={0}>
            {datas
              ?.filter((data) => newsCategories[data.billClassify])
              .slice(0, 3)
              .map(
                (item) =>
                  item && (
                    <span key={item.id} className={styles.marquee_text}>{`${
                      (newsCategories[item.billClassify] ?? '') + '赛事'
                    }: ${item?.billboardContentCn ?? ''}`}</span>
                  ),
              )}
            {datas && datas.length <= 0 && <span className={styles.marquee_text}>暂无公告</span>}
          </Marquee>
        </div>
      </div>
      <div className='r-actions'>
        <LanguageDropdown />
        {/* <SettingsDropdown /> */}
      </div>
    </div>
  );
});
