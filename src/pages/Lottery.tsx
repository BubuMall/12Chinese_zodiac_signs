import React from 'react';
import yayJpg from '../assets/yay.jpg';
import styles from './Lottery.less';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page Lottery</h1>
      <p>
        <img src={yayJpg} width="388" />
      </p>
    </div>
  );
}
