import React, { useRef, useState } from "react";
import { TChampionResult } from "@core/reducers/_reduxStore.d";
import style from "./style.module.scss";
import Item from "./Item";
import ChampionFilterBar from "../fliterBar/ChampionFilterBar";

export default React.memo(({ data }: { data: TChampionResult }) => {
  const { sportId: id, sportName: sn, counts, details } = data;
  const isCollapseAll = useRef(false);
  const [isCollapse, setIsCollapse] = useState([]);
  const onToggle = () => {
    if (isCollapseAll.current) {
      setIsCollapse([]);
      isCollapseAll.current = !isCollapseAll.current;
    } else {
      isCollapseAll.current = !isCollapseAll.current;
      // setIsCollapse(leagueIdAll.current);
    }
  };
  const matches = _.groupBy(details, "matchName");
  console.warn(isCollapse);

  return (
    <div className={style.single_wrapper}>
      <ChampionFilterBar
        sportId={id}
        count={counts}
        sportName={sn}
        toggle={onToggle}
        showPanel={true}
      />
      {Object.entries(matches).map(([mn, match]) => {
        return <Item key={mn} mn={mn} match={match} />;
      })}
    </div>
  );
});
