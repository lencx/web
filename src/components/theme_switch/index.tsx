/**
 * @author: lencx
 * @create_at: Jan 27, 2020
 */

import React, { useEffect, useState } from 'react';
import { createScript } from '~utils/tools';
import Switch from '~comps/switch';
import themeScript from './core';
import moonIcon from './moon.png';
import sunIcon from './sun.png';

const now = new Date();

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    createScript({
      script: themeScript,
    });
  }, []);

  useEffect(() => {
    const win: any = window;
    setTheme(win.__theme);
    win.__onThemeChange = () => {
      setTheme(win.__theme);
    };
  }, []);

  useEffect(() => {
    (document as any)
      .querySelector('html')
      .setAttribute(
        'style',
        `${now.getMonth() + 1}.${now.getDate()}` === '4.4'
          ? `filter: grayscale(0.88)`
          : ''
      );
  }, []);

  return (
    theme && (
      <Switch
        checked={theme === 'dark'}
        onChange={e =>
          (window as any).__setPreferredTheme(e ? 'dark' : 'light')
        }
        icons={{
          checked: (
            <img
              src={moonIcon}
              role="presentation"
              style={{ pointerEvents: 'none', verticalAlign: 'top' }}
              alt="dark theme"
            />
          ),
          unchecked: (
            <img
              src={sunIcon}
              role="presentation"
              style={{ pointerEvents: 'none', verticalAlign: 'top' }}
              alt="light theme"
            />
          ),
        }}
      />
    )
  );
}
