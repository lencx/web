/**
 * @author: lencx
 * @create_at: Jan 25, 2020
 */

import React, { useState } from 'react';
import cns from 'classnames';
import styles from './navicon.mod.scss';

interface NavIconProps {
  className?: string;
  onChange?: (isOpen: boolean) => void;
}

export default function NavIcon({ onChange, className }: NavIconProps) {
  const [isOpen, setState] = useState(false);
  const handleChange = () => {
    setState(!isOpen);
    onChange && onChange(!isOpen);
  };
  return (
    <div
      className={cns(styles.navicon, className, {
        [styles.open]: isOpen,
      })}
      onClick={handleChange}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
