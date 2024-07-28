import { Suspense } from "react";

import css from "./style.scss";

interface IProps {
  width?: number | string;
  height?: number | string;
}

export function LazyLoader({ width = "auto", height = "auto" }: IProps) {
  return (
    <div className={css.wrapper} style={{ width, height }}>
      <span />
    </div>
  );
}

export const SuspenseWrapper = (Component: any) =>
  function () {
    return <Suspense fallback={<LazyLoader />}>{Component}</Suspense>;
  };

export default LazyLoader;
