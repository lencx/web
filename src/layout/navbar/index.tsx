/**
 * @author: lencx
 * @create_at: Jan 25, 2020
 */

import React, { useState } from 'react';
import { Link } from 'gatsby';
import cns from 'classnames';
import NavIcon from '~comps/nav_icon';

import styles from './navbar.mod.scss';

interface NavBarProps {
  menu: Array<{
    title: string;
    link: string;
  }>;
}

export default function NavBar({ menu = [] }: NavBarProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <NavIcon className={styles.navicon} onChange={e => setOpen(e)} />
      <ul
        className={cns({
          [styles.open]: isOpen,
        })}
      >
        {menu.map(menuItem => {
          return (
            <li key={menuItem.title}>
              <Link to={menuItem.link}>{menuItem.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
