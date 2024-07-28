import dayjs from "dayjs";
import { PlayType, TOrder } from "@core/services/Table";
import classnames from "classnames";
import usePublicState from "@core/hooks/usePublicState";
import { TMatch } from "@core/services/Table";
import styles from "./style.scss";
import { getMatchStatusByPeriod } from "@core/utils";
import useOrderCart from "@core/hooks/sports/useOrderCart";
import { useOddTransfer } from "@core/hooks/sports/useOddTransfer";
import DpImage from "@this/components/Image";
import useZoomMatch from "@core/hooks/sports/useZoomMatch";
import { Flex, Tooltip } from "antd";
import { DpIcon } from "@views/esports/desktop/components";

interface IProps {
  match: TMatch;
  market?: undefined | PlayType;
  getViewOdd?: Function;
  addAndRemoveOrder?: Function;
  orderTags?: String[];
  locked?: boolean;
  lg?: string;
  matchId?: number;
  sportId?: number;
}
export default React.memo(({ match, market, lg }: IProps) => {
  const { dispatch, ACTIONS } = usePublicState();
  const { getViewOdd } = useOddTransfer();
  const { addAndRemoveOrder, orderTags } = useOrderCart();
  const { home, away } = match.teams;
  const getOps = (market: PlayType, type: String = "Home") => {
    const ops: TOrder[] = _.get(market, "mks[0].ops");
    const temp = ops.find(
      (item) =>
        item.type.toString().toUpperCase() === type?.toUpperCase() ||
        (type === "Home"
          ? item.type.toString().toUpperCase() ===
            item.teams.home.name?.toUpperCase()
          : item.type.toString().toUpperCase() ===
            item.teams.away.name?.toUpperCase())
    );
    if (!temp) {
      if (type.toUpperCase() === "HOME") return ops[0];
      else if (type.toUpperCase() === "AWAY") return ops[ops.length - 1];
    }
    return temp;
  };
  const onBet = (teamInfo: TOrder, event: React.MouseEvent) => {
    event.stopPropagation();
    addAndRemoveOrder(teamInfo);
  };
  const { openZoom } = useZoomMatch();
  const onOpen = () => {
    openZoom(match.matchId);
  };
  const homeIcon = React.useMemo(() => {
    return (
      <DpImage
        className="team-logo"
        sportId={match?.sportId}
        size={30}
        width={30}
        src={home.icon}
        type="team"
      />
    );
  }, [match?.matchId]);

  const HomeRender = React.useCallback(() => {
    const teamInfo = getOps(market, "Home");
    if (!teamInfo) {
      return (
        <div className="team left team-odds-item disabled">
          {homeIcon}
          <Tooltip title={home.name} placement="top">
            <div className="team-name">{home.name}</div>
          </Tooltip>
          <span>-</span>
        </div>
      );
    }
    const className = [
      "team left team-odds-item",
      teamInfo?.available ? "between" : "disabled",
      _.includes(orderTags, teamInfo.tag) ? "active" : "",
      teamInfo.available && !teamInfo.locked && teamInfo.change,
    ];
    return (
      teamInfo && (
        <div className={className.join(" ")}>
          {homeIcon}
          <Tooltip title={home.name} placement="top">
            <div className="team-name">{home.name}</div>
          </Tooltip>
          {teamInfo.locked ? (
            <DpIcon type="lockcircle" />
          ) : (
            <span
              className={classnames("e-odd", teamInfo.change)}
              onClick={(e) => onBet(teamInfo, e)}
            >
              {getViewOdd(teamInfo.od, teamInfo.oddBetType)}
            </span>
          )}
        </div>
      )
    );
  }, [market, match, orderTags]);

  const AwayRender = React.useCallback(() => {
    const teamInfo = getOps(market, "Away");
    if (!teamInfo) {
      return (
        <div className="team left team-odds-item disabled">
          <span>-</span>
          <Tooltip title={away.name} placement="top">
            <div className="team-name">{away.name}</div>
          </Tooltip>
          <DpImage
            sportId={match.sportId}
            key={match.matchId}
            className="team-logo"
            size={30}
            width={30}
            src={away.icon}
            type="team"
          />
        </div>
      );
    }
    const className = [
      "team right team-odds-item",
      teamInfo?.available ? "between" : "disabled",
      _.includes(orderTags, teamInfo.tag) ? "active" : "",
      teamInfo.available && !teamInfo.locked && teamInfo.change,
    ];
    return (
      teamInfo && (
        <div className={className.join(" ")}>
          <DpImage
            key={match.matchId}
            sportId={match.sportId}
            className="team-logo"
            size={30}
            width={30}
            src={away.icon}
            active={_.includes(orderTags, teamInfo.tag)}
            type="team"
          />
          <Tooltip title={away.name} placement="top">
            <div className="team-name">{away.name}</div>
          </Tooltip>
          {teamInfo.locked ? (
            <DpIcon type="lockcircle" />
          ) : (
            <span
              className={classnames("e-odd", teamInfo.change)}
              onClick={(e) => onBet(teamInfo, e)}
            >
              {" "}
              {getViewOdd(teamInfo.od, teamInfo.oddBetType)}
            </span>
          )}
        </div>
      )
    );
  }, [market, match, orderTags]);

  const RenderScore = React.useCallback(
    (isHome?: boolean) => {
      const { matchClock, score } = match;
      return (
        <div className="home-score">
          {matchClock.period ? (isHome ? score.home : score.away) : ""}
        </div>
      );
    },
    [match]
  );

  const DrawRender = React.useCallback(() => {
    return (
      <Flex
        vertical
        justify="center"
        align="center"
        gap={9}
        className="draw-render"
      >
        <Flex justify="center" align="center" className="draw-score">
          {RenderScore(true)}
          <span className="cross">
            {match.matchClock.isRunning ? "-" : "VS"}
          </span>
          {RenderScore()}
        </Flex>
        {/* <span className='huosheng'>全局获胜</span> */}
      </Flex>
    );
  }, [market, match, orderTags]);

  const LockedOdd = React.memo(
    ({
      matchId,
      sportId,
      locked,
    }: {
      matchId: number;
      sportId: number;
      locked: boolean;
    }) => {
      return (
        <>
          <div
            className={classnames(styles.team_info, "pointer locked-odd")}
            onClick={() =>
              dispatch(ACTIONS.SPORT.updateCurrentMatch({ matchId: matchId }))
            }
          >
            <div className="team left">
              {homeIcon}
              <div className="team-name">{home.name}</div>
              <span className={"e-odd"}>
                {locked ? <DpIcon type="lockcircle" /> : "-"}
              </span>
            </div>
            {DrawRender()}
            <div className="team right">
              <DpImage
                sportId={sportId}
                className="team-logo"
                size={30}
                width={30}
                src={away.icon}
                type="team"
              />
              <div className="team-name">{away.name}</div>
              <span className={"e-odd"}>
                {locked ? <DpIcon type="lockcircle" /> : "-"}
              </span>
            </div>
          </div>
          <div className={styles.more} onClick={onOpen}>
            +{match.playTypeCount}
          </div>
        </>
      );
    }
  );

  return (
    <>
      <Flex
        align="center"
        gap={14}
        className={classnames(styles.match_status, "pointer")}
        onClick={() =>
          dispatch(ACTIONS.SPORT.updateCurrentMatch({ matchId: match.matchId }))
        }
      >
        {match.matchClock.isRunning ? (
          <>
            <DpImage src={lg} type="league" size={30} width={30} />
            <Flex vertical gap={6} className="match-time">
              <p className="top period">
                {getMatchStatusByPeriod(match.matchClock.period)}
              </p>
              {match.matchClock.playTime && (
                <p className="under">{match.matchClock.playTime}</p>
              )}
            </Flex>
          </>
        ) : (
          <>
            <DpImage src={lg} type="league" size={30} width={30} />
            <Flex vertical gap={6} className="match-time">
              <p className="top start-time">
                {dayjs(match.matchClock.startTime).format("HH:mm")}
              </p>
              <p className="under">
                {dayjs(match.matchClock.startTime).format("MM-DD")}
              </p>
            </Flex>
          </>
        )}
      </Flex>
      {market && !market.mks[0].ops.some((op) => !op.available) ? (
        <>
          <div
            className={classnames(styles.team_info, "pointer market")}
            onClick={() =>
              dispatch(
                ACTIONS.SPORT.updateCurrentMatch({ matchId: match.matchId })
              )
            }
          >
            {HomeRender()}
            {DrawRender()}
            {AwayRender()}
          </div>
          <div className={styles.more} onClick={() => onOpen()}>
            +{match.playTypeCount}
          </div>
        </>
      ) : (
        <LockedOdd
          matchId={match.matchId}
          sportId={match.sportId}
          locked={market?.mks[0].ops.some((op) => op.locked)}
        />
      )}
    </>
  );
});
