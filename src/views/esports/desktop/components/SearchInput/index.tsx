import React, {ChangeEvent} from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import {IconSearch} from '../Icon';

interface propTypes {
  className?: string;
  placeholder: string;
  value: string;
  showSearchIcon?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchChange?: () => void
};

function DpSearchInput({className, placeholder, value, showSearchIcon = false, handleChange, handleSearchChange}: propTypes) {
  return (
    <div className={classnames(styles.dp_search_input, className)}>
      <input placeholder={placeholder} className={className} value={value} onChange={handleChange} />
      {showSearchIcon && <button type='button' onClick={handleSearchChange}><IconSearch fill="#BECEEE" width={16} height={16} /></button>}
    </div>
  );
};

export default React.memo(DpSearchInput);
