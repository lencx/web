/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';
import Logo from '~comps/logo';
import styles from './index.mod.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} />
      <span>Menu</span>
    </div>
  );
}
