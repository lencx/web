/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';
import { Link } from 'gatsby';
import cns from 'classnames';
import Logo from '~comps/logo';
import NavBar from '~layout/navbar';

import styles from './header.mod.scss';

interface HeaderProps {
  className?: string;
  isHome?: boolean;
}

export default function Header({ className, isHome = false }: HeaderProps) {
  return (
    <div className={cns(styles.header, className)}>
      <Logo className={styles.logo} />
      <div className={styles.menu}>
        {isHome ? (
          <Link className={styles.about} to="/about">
            @lencx
          </Link>
        ) : (
          <NavBar
            menu={[
              { title: 'Explore', link: '/explore' },
              { title: 'Archive', link: '/archive' },
              { title: 'Blog', link: '/blog' },
              { title: 'Tools', link: '/tools' },
              { title: 'About', link: '/about' },
            ]}
          />
        )}
      </div>
    </div>
  );
}
