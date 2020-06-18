import React from 'react';
import styles from './FormField.module.scss';

export const FormFieldGroup = ({
  children
}) => {
  return (
    <div className={styles.group}>
      {children}
    </div>
  )
}

export const FormField = ({
  label,
  children
}) => {
  return (
    <div className={styles.component}>
      <div className={styles.label}>
        <div className={styles.labelText}>
          {label}
        </div>
      </div>

      <div className={styles.controls}>
        {children}
      </div>
    </div>
  );
};