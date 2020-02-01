/**
 * @author: lencx
 * @create_at: Jan 23, 2020
 */

import React, { useEffect } from 'react';
import { createScript } from '~utils/tools';
import { s1, s2, init } from './core';

export default function ChasmChart() {
  useEffect(() => {
    createScript({
      id: `vertex-shader`,
      type: `x-shader/x-vertex`,
      script: s1,
    });
    createScript({
      id: `fragment-shader`,
      type: `x-shader/x-fragment`,
      script: s2,
    });
    init('nofwl__chasm');
  }, []);

  return <canvas id="nofwl__chasm" />;
}
