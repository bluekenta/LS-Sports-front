import { useCallback, useState, useEffect } from "react";
import classnames from "classnames";
import dayjs from "dayjs";
import { GamesType, DatePickerProps } from "./../../type";
import style from "./style.module.scss";

export default function ({
  sportId,
  handleSportId,
  handelGetTime,
  opts,
}: DatePickerProps) {
  const [index, setIndex] = useState(0);
  const onClick = useCallback((idx: number, item: GamesType) => {
    console.log(item.value);
    handleSportId(item.value);
    handelGetTime(dayjs().format("YYYY/MM/DD"));
    setIndex(idx);
  }, []);

  useEffect(() => {
    const inSportTypeRange = opts.findIndex((item) => item.value === sportId);
    if (inSportTypeRange > -1) {
      setIndex(inSportTypeRange);
    } else {
      setIndex(-1);
    }
  }, [sportId, opts]);

  return (
    <div className={style.wrapper}>
      {opts.map(
        (item, idx) =>
          item && (
            <div
              className={classnames(style.type_item, {
                [style.active]: idx === index,
              })}
              onClick={() => onClick(idx, item)}
              key={item.value}
            >
              <div
                className={classnames(
                  style.sport_logo,
                  style[`sid_${item?.value}`]
                )}
              ></div>
              <p>{item.label}</p>
            </div>
          )
      )}
    </div>
  );
}
