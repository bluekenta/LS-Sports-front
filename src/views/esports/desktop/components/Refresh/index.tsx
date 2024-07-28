import React from 'react';
import classnames from 'classnames';
import style from './style.scss';

interface propTypes {
  handleRefresh: () => void;
  loading: boolean
};

function DpRefreshIcon({loading, handleRefresh}: propTypes) {
  return (
    <div className={classnames(style.wrapper, 'refresh-outter')} onClick={handleRefresh}>
      <span className={`refresh refresh-inner ${loading && 'rotate-infinite'}`}></span>
    </div>
  );
};

export default React.memo(DpRefreshIcon);
