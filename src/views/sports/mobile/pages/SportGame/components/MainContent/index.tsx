import LeagueList from "@this/pages/SportGame/components/LeagueList";
import css from "./style.scss";
import classnames from "classnames";

export default () => {
  return (
    <div className={classnames(css.wrapper, "main-content")}>
      <LeagueList />
    </div>
  );
};
