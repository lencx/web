/**
 * @author: lencx
 * @create_at: Jan 30, 2020
 */

import React from 'react';
import XSVG from './svg';

export default function XDate({
  fill = 'var(--theme-primary)',
  size = 18,
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
          d="m92 890c0 18.537 24.004 42 44.21 42h751.58c20.204 0 44.21-23.463 44.21-42v-545.98h-840zm309.474-419.98h265.263v83.98l-132.632 293.979h-88.421l132.631-293.978h-176.841v-83.98zm486.315-294h-132.631v-84.02h-88.422v84.021h-309.473v-84.021h-88.42v84.021h-132.633c-20.207 0-44.211 23.46-44.211 41.977v84.003h840v-75.613c0-18.498-11.572-50.367-44.21-50.367z"
          fill={fill}
        />
      </svg>
    </XSVG>
  );
}
