/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';
import styles from './footer.mod.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://github.com/lencx/nofwl"
        target="_blank"
        rel="noopener noreferrer"
      >
        nofwl
      </a>
      {' · '}
      <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
        RSS
      </a>
    </footer>
  );
}
