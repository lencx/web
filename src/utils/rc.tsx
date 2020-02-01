/**
 * @author: lencx
 * @create_at: Jan 30, 2020
 */

import React from 'react';

// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/HOC.md
export function hoc<T>(Component: React.ComponentType<T>) {
  return function comp(props: T): React.ReactNode {
    return <Component {...props} />;
  };
}
