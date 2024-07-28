import {TMatch} from '@core/services/Table';
import DpImage from '@this/components/Image';
import {Flex, Tooltip} from 'antd';
import {getMatchStatusByPeriod} from '@core/utils';
import dayjs from 'dayjs';
import classnames from 'classnames';
import style from './style.scss';

interface IScoreCompProp {
  match: TMatch;
  isFull?: boolean;
  className?: string;
}
function ScoreComponent({match, isFull}: IScoreCompProp) {
  return (
    <div className={classnames(style.wrapper, {'is-full': isFull})}>
      <div className="logo">
        <DpImage sportId={match.sportId} size={44} width={44} className="team-logo" type="team" src={match.teams.home.icon} />
        <div className="team-name">
          <Tooltip title={match.teams.home.name} placement='top'>
            {match.teams.home.name}
          </Tooltip>
        </div>
      </div>
      {match.matchClock.isRunning && !!match.matchClock.period ? (
            <Flex vertical align='center' className="score">
              <Flex justify='between' className="bottom">
                <span>{getMatchStatusByPeriod(match.matchClock.period)}</span>
                {/* {isFull && <span>00:00</span>} */}
              </Flex>
              <div className="above">{(match?.score?.home ?? '') + '-' + (match?.score?.away ?? '')}</div>
            </Flex>
          ) : (
            <Flex vertical align='center' className="score vs">
              <div className="above">VS</div>
              <Flex justify='between' className="bottom">
                {/* <span>{dayjs(match.matchClock.startTime).format('MM月DD日')}</span> */}
                <span>{dayjs(match.matchClock.startTime).format('HH:mm')}</span>
              </Flex>
            </Flex>
          )}
      <div className="logo">
        <DpImage sportId={match.sportId} size={44} width={44} className="team-logo" type="team" src={match.teams.away.icon} />
        <div className="team-name away">
          <Tooltip title={match.teams.away.name} placement='top'>
            {match.teams.away.name}
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ScoreComponent);
