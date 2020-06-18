import React from 'react';
import classNames from 'classnames/bind';

import styles from './Panel.module.scss';

const cx = classNames.bind(styles);

class Panel extends React.Component {
  constructor() {
    super();

    this.state = {
      open: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const bodyClasses = cx({
      body: true,
      bodyOpen: this.state.open
    });
  
    return (
      <div className={styles.component}>
        <div className={cx(styles.header)}>
          <div className={cx(styles.headerTitle)}>Panel header</div>
  
          <label className={cx(styles.headerAction)}>
            <input type="checkbox"/> Enabled
          </label>
  
          <button className={cx(styles.headerAction)}
                onClick={this.toggle}>
            x
          </button>
        </div>
  
        <div className={bodyClasses}>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Panel;
