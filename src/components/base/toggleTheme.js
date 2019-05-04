import React, { useState, useEffect } from 'react'

import Toggle from '../Toggle'
import moon from './../../assets/moon.png'
import sun from './../../assets/sun.png'

const ToggleIcons = {
  checked: (
    <img
      src={moon}
      width="16"
      height="16"
      role="presentation"
      style={{ pointerEvents: 'none' }}
      alt="dark theme"
      />
      ),
  unchecked: (
    <img
      src={sun}
      width="16"
      height="16"
      role="presentation"
      style={{ pointerEvents: 'none' }}
      alt="light theme"
    />
  ),
}

export default () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  return (
    theme && <Toggle
      className="toggle__theme"
      icons={ToggleIcons}
      checked={theme === 'dark'}
      onChange={e =>
        window.__setPreferredTheme(
          e.target.checked ? 'dark' : 'light'
        )
      }
    />
  )
}