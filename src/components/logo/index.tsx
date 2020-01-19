/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';
import cns from 'classnames';
import { Link } from 'gatsby';
import NofwlIcon from '~assets/lencx.png';
import styles from './index.mod.scss';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link className={cns(styles.logo, className)} to="/">
      <img src={NofwlIcon} alt="nofwl-logo" />
    </Link>
  );
}
