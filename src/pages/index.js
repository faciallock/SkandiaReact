import React from 'react';
import { connect } from 'dva';
import styles from './index.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}></h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li className={styles.normal}>Skandia ReactJS Prototype</li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
