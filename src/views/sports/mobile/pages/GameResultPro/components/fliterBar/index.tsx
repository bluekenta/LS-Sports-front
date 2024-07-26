import {TGameResultStatistic} from '@core/reducers/_reduxStore';
import classnames from 'classnames';
import style from './style.module.scss';
import _ from 'lodash';
interface Props {
  setFilter?: () => void;
  toggle: () => void;
  showPanel: boolean;
  gameResult: TGameResultStatistic[];
}
const FilterBar = React.memo(({setFilter, toggle, showPanel, gameResult}: Props) => {
  const numberOfLeague = Object.keys(_.groupBy(gameResult, 'ln')).length;
  return (
    <div className={style.filter_wrapper}>
      <div className={style.filter}>
        <div
          className={classnames(style.icon, style.filterIcon)}
          onClick={() => setFilter()}
        />
        <div className={style.txt}>全部赛事</div>
        {setFilter ? (
          <div className={style.status}>({numberOfLeague}/{gameResult?.length})</div>
        ) : (
          <div className={style.status}>({gameResult?.length})</div>
        )}
      </div>
      <div onClick={() => toggle()} className={showPanel ? style.showPanel : style.hidePanel}></div>
    </div>
  );
});

export default FilterBar;

