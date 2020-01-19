/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';
import styles from './index.mod.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://github.com/lencx/nofwl">nofwl</a>
    </footer>
  );
}
