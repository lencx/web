import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from './logo';

import ToggleTheme from './toggleTheme';
import Navbar from './../Navbar';

const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

const Header = () => {
  const [prefixCls, setPrefixCls] = useState(['nofwl-header']);
  let prevY = 0;

  const handleHeader = () => {
    const headY = getScrollPosition().y;
    const showHead = headY < 200 || prevY > headY;
    setPrefixCls([
      ...prefixCls,
      showHead ? 'head__pinned' : 'head__unpinned',
    ]);
    prevY = headY;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleHeader);
    return () => {
      window.removeEventListener('scroll', handleHeader);
    };
  }, [])

  return (
    <header className={prefixCls.join(' ')}>
      <div className="head-container">
        <Logo />
        <Navbar menus={[
          { name: 'home', link: '/' },
          { name: 'archive', link: '/archive' },
          { name: 'about', link: '/about' },
          { name: 'tools', submenus: [
            { name: 'tool 1', link: '/tool/1' },
            { name: 'tool 2', link: '/tool/2' },
            { name: 'tool 3', link: '/tool/3' },
          ] },
          { name: 'other', submenus: [
            { name: 'other 1', link: '/other/1' },
            { name: 'other 2', link: '/other/2' },
            { name: 'other 3', link: '/other/3' },
          ] },
          { name: 'toggleTheme', render: <ToggleTheme /> },
        ]} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDesc: ``,
}

export default Header
