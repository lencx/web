/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';
import classnames from 'classnames';
import Logo from '~comps/logo';

import styles from './header.mod.scss';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <div className={classnames(styles.header, className)}>
      <Logo className={styles.logo} />
      {/* <span>Menu</span> */}
    </div>
  );
}
