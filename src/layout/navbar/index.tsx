/**
 * @author: lencx
 * @create_at: Jan 25, 2020
 */

import React, { useState } from 'react';
import { navigate } from 'gatsby';
import cns from 'classnames';
import NavIcon from '~comps/nav_icon';
import ThemeSwitch from '~comps/theme_switch';

import styles from './navbar.mod.scss';

export interface NavBarProps {
  menu: Array<{
    title: string;
    link: string;
  }>;
}

export default function NavBar({ menu = [] }: NavBarProps) {
  const [isOpen, setOpen] = useState(false);

  const _menu = menu.map(item => item.link);
  const tmp = location.pathname.match(/^(\/\w+)\/?/);
  let currPath = '';
  if (tmp && _menu.includes(tmp[1])) {
    currPath = tmp[1];
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
          [styles.open]: isOpen,
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
