/**
 * @author: lencx
 * @create_at: Jan 30, 2020
 */

import React from 'react';
import XSVG from './svg';

export default function XTag({
  fill = 'var(--theme-primary)',
  size = 22,
  className,
  ...rest
}: SVGProps) {
  return (
    <XSVG className={className}>
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...rest}
      >
        <path
          d="m768.14 145.64h-326.63c-59.91 0-120.49 41.41-120.49 120.42v636.44c0 6.8 4.2 13.06 10.55 15.73 2.21.92 4.51 1.38 6.72 1.38 4.36 0 8.86-1.76 12.15-5.04l151.2-151.21 156.7 151.21c3.22 3.28 7.72 5.04 12.07 5.04 2.14 0 4.51-.46 6.65-1.38 6.42-2.68 10.55-8.93 10.55-15.73v-655.01"
          fill={fill}
        />
      </svg>
    </XSVG>
  );
}
