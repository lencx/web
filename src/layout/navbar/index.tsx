/**
 * @author: lencx
 * @create_at: Jan 25, 2020
 */

import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import cns from 'classnames';
import NavIcon from '~comps/nav_icon';
import ThemeSwitch from '~comps/theme_switch';

import styles from './navbar.mod.scss';

export interface NavBarProps {
  visible: boolean;
  menu: Array<{
    title: string;
    link: string;
  }>;
}

export default function NavBar({ visible, menu = [] }: NavBarProps) {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(visible);

  useEffect(() => {
    setVisible(visible);
  }, [visible]);

  const _menu = menu.map(item => item.link);
  let currPath = '';
  // fix build error
  // "window" is not available during server side rendering.
  // WebpackError: ReferenceError: window is not defined
  if (typeof window !== 'undefined') {
    const tmp = window && window.location.pathname.match(/^(\/\w+)\/?/);
    if (tmp && _menu.includes(tmp[1])) {
      currPath = tmp[1];
    }
  }

  return (
    <div className={styles.navbar}>
      <NavIcon
        toggle={isOpen}
        className={styles.navicon}
        onChange={e => setOpen(e)}
      />
      <ul
        className={cns({
          [styles.open]: isOpen && isVisible,
        })}
      >
        {menu.map(menuItem => {
          return (
            <li
              key={menuItem.title}
              className={cns({
                [styles.active]: currPath === menuItem.link,
              })}
            >
              <span
                onClick={() => {
                  navigate(menuItem.link);
                  setOpen(false);
                }}
              >
                {menuItem.title}
              </span>
            </li>
          );
        })}
        <li className={styles.theme}>
          <ThemeSwitch />
        </li>
      </ul>
    </div>
  );
}
