import DpIcon from "@this/components/Icon";
import { useSelector } from "react-redux";
import usePublicState from "@core/hooks/usePublicState";
import { PlayType, TMatch } from "@core/services/Table";
import IStore from "@core/reducers/_reduxStore";
import MatchInfos from "./MatchInfos";
import { getNewbiePlayListBySid, transforMarkets } from "@core/utils";
import { TMitt } from "@core/constants/enum/mitt";
import useEventEmitter from "@core/hooks/useEventEmitter";
import { Flex, Tooltip } from "antd";
import useFavorites from "@core/hooks/sports/useFavorites";
import { ALL_EMATCH_TYPES } from "@core/constants/enum/sport";
import styles from "./style.scss";

export type TSyncEmittData = {
  matchId: number;
  selected: "video" | "animation" | "score";
};

interface IProp {
  match: TMatch;
  leagueName: React.ReactNode;
  lg: string;
}
export default React.memo(({ match, leagueName, lg }: IProp) => {
  const { dispatch, ACTIONS } = usePublicState();
  const gameList = getNewbiePlayListBySid(match.sportId, match.round);
  const markets: (undefined | PlayType)[] = transforMarkets(match, gameList);
  const currentMatchId = useSelector(
    (state: IStore) => state.sport.display.currentMatchId
  );
  const [selected, setSelected] = React.useState<
    TMitt["syncMediaSelected"]["selected"] | null
  >(null);
  const { isFavorite, onToggleFavorite } = useFavorites();

  const { emit } = useEventEmitter<TMitt["syncMediaSelected"]>({
    mittName: "syncMediaSelected",
    on: (data) => {
      if (data.matchId !== match.matchId) return setSelected(null);
      setSelected(data.selected);
    },
  });

  const handleSelect = React.useCallback(
    (selected: TMitt["syncMediaSelected"]["selected"]) => {
      emit({ matchId: match.matchId, selected });
      setSelected(selected);
    },
    [currentMatchId]
  );
  return (
    <Flex
      vertical
      className={`${styles.match_item_of_noob} pointer ${
        currentMatchId === match.matchId ? "active" : ""
      }`}
    >
      <Flex
        justify="flex-start"
        align="center"
        gap={10}
        className="match-header"
        onClick={() =>
          dispatch(ACTIONS.SPORT.updateCurrentMatch({ matchId: match.matchId }))
        }
      >
        <span className="league-name">{leagueName}</span>
        <span className="match-round">{match.round?.toUpperCase()}</span>
        {match.isLive && (
          <Flex justify="center" align="center" className="gunqiu">
            {ALL_EMATCH_TYPES[1].shortName}
          </Flex>
        )}
        {/* <Flex justify='center' align='center' className='chuanguan'>局内串关</Flex> */}
      </Flex>
      <Flex className="match-info">
        <MatchInfos match={match} lg={lg} market={markets[0]} />
        <Flex
          className="video-list"
          justify={match.isLive && match.hasVideo ? "space-between" : "center"}
          align="center"
          vertical
          gap={9}
        >
          <Tooltip title="收藏" placement="top">
            <div className="pointer shouchang">
              <DpIcon
                type="collect2"
                active={isFavorite([match.matchId])}
                onClick={(e) => onToggleFavorite(e, [match.matchId])}
              />
            </div>
          </Tooltip>
          {match.isLive && match.hasVideo && (
            <Tooltip title="视频源" placement="top">
              <Flex
                justify="center"
                align="center"
                className="pointer shipin"
                onClick={() => handleSelect("video")}
              >
                <span
                  className={
                    selected === "video" && match.isLive
                      ? "video-item active"
                      : "video-item"
                  }
                >
                  视频
                </span>
              </Flex>
            </Tooltip>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
});
