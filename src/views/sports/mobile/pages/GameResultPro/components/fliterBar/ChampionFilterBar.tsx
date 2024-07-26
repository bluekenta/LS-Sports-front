import {ESportType} from '@core/constants/enum/sport';
import classnames from 'classnames';
import style from './style.module.scss';
import _ from 'lodash';
interface Props {
  toggle: () => void;
  showPanel: boolean;
  sportId: ESportType;
  sportName: string;
  count: number;
}
const ChampionFilterBar = React.memo(({toggle, showPanel, sportId, sportName, count}: Props) => {
  return (
    <div className={classnames(style.filter_wrapper, style.champion_filter)}>
      <div className={style.filter}>
        <div className={classnames(style.icon, style.sport_logo, style[`sid_${sportId}`])} />
        <div className={style.txt}>{sportName}赛事</div>
        <div className={style.status}>({count})</div>
      </div>
      <div onClick={() => toggle()} className={showPanel ? style.showPanel : style.hidePanel}></div>
    </div>
  );
});

export default ChampionFilterBar;

