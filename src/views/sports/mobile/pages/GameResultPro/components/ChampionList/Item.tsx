import {useInView} from 'react-intersection-observer';
import useTheme from '@core/hooks/useTheme';
import classnames from 'classnames';
import DpIcon from '@this/components/Icon';
import style from './style.module.scss';
import {TChampionResultItem} from '@core/apis/models/sport/get-game-result';
import dayjs from 'dayjs';

interface IProps {
  mn: string;
  match: TChampionResultItem[];
  toggleCollapseLeague?: (mn: string) => void;
  isCollapse?: Array<string>;
}
export default React.memo((props: IProps) => {
  const {mn, match, toggleCollapseLeague, isCollapse} = props;
  console.warn(match);
  const {ref} = useInView();
  const {mobileTheme} = useTheme();

  return (
    <div ref={ref} className={style.item}>
      <div className={style.match_wrapper} onClick={()=> {
        toggleCollapseLeague(mn);
      }}>
        <div className={style.match_name}>
          {mn}
        </div>
        <div className={style.actions}>
          <DpIcon className={classnames(style.icon, {[style.icon_right]: isCollapse?.includes(mn)})} width={12} height={12} type="arrow" fill={mobileTheme.dpAncillary} />
        </div>
      </div>
      <div className={style.item_content}>
        {
          match.map((data, key)=>{
            return <div className={style.item_bet} key={key}>
              <div className={style.league}>
                {/* {data.leagueLogo && <span>{data.leagueLogo}</span>} */}
                <span>{data.leagueName}</span>
              </div>
              <div className={style.detail} >
                <div className={style.item_name}>{data.betItemsName}
                </div>
                <div className={style.handicap}>{data.handicap}</div>
              </div>
              <div className={style.time}>
                {dayjs(data.beginTime).format('MM-DD hh:mm')}
              </div>
            </div>;
          })
        }
      </div>
    </div>
  );
});
