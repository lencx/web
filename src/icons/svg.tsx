/**
 * @author: lencx
 * @create_at: Jan 30, 2020
 */

import React from 'react';
import cns from 'classnames';
import './svg.scss';

export default function XSVG({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <i className={cns(className, 'xsvg')}>{children}</i>;
}
