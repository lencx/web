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

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={e => (window as any).__setPreferredTheme(e ? 'dark' : 'light')}
      icons={{
        checked: (
          <img
            src={moonIcon}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
            alt="dark theme"
          />
        ),
        unchecked: (
          <img
            src={sunIcon}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
            alt="light theme"
          />
        ),
      }}
    />
  );
}
