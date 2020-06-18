import React from 'react';

import styles from './HeightBox.module.scss';

const HeightBox = ({
  children
}) => {
  return (
    <div className={styles.component}>
      {children}
    </div>
  );
};

export default HeightBox;