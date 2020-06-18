import React from 'react';
import classnames from 'classnames/bind';
import styles from './LayoutColumns.module.scss';

const cx = classnames.bind(styles);

export const LayoutColumns = ({
  space,
  children
}) => {
  const classes = cx('layout', `spacing-${space}`);

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export const LayoutColumnsItem = ({
  space,
  children
}) => {
  const classes = cx('item', `spacing-${space}`);

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
