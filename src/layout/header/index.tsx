/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import cns from 'classnames';
import Logo from '~comps/logo';
import NavBar from '~layout/navbar';
import { getScrollPosition } from '~utils/tools';

import styles from './header.mod.scss';

export interface HeaderProps {
  className?: string;
  isHome?: boolean;
}

export default function Header({ className, isHome = false }: HeaderProps) {
  const [visible, setVisible] = useState(true);
  let prevY = 0;

  const handleHeader = () => {
    const headY = getScrollPosition().y;
    const showHead = headY < 200 || prevY > headY;
    setVisible(showHead);
    prevY = headY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleHeader);
    return () => {
      window.removeEventListener('scroll', handleHeader);
    };
  }, []);
  return (
    <div
      className={cns(styles.header, className, {
        [styles.hide]: !visible,
      })}
    >
      <Logo className={styles.logo} />
      <div className={styles.menu}>
        {isHome ? (
          <Link className={styles.about} to="/about">
            @lencx
          </Link>
        ) : (
          <NavBar
            visible={visible}
            menu={[
              { title: 'Explore', link: '/explore' },
              { title: 'Blog', link: '/blog' },
              { title: 'Tools', link: '/tools' },
              { title: 'Archive', link: '/archive' },
              { title: 'About', link: '/about' },
            ]}
          />
        )}
      </div>
    </div>
  );
}
