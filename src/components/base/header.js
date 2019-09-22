import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getScrollPosition } from '~utils/tools'
import Logo from './logo'

import ToggleTheme from './toggleTheme'
import Navbar from './../Navbar'

const Header = () => {
  const [prefixCls, setPrefixCls] = useState(['nofwl-header'])
  let prevY = 0

  const handleHeader = () => {
    const headY = getScrollPosition().y
    const showHead = headY < 200 || prevY > headY
    setPrefixCls([
      ...prefixCls,
      showHead ? 'head__pinned' : 'head__unpinned',
    ])
    prevY = headY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleHeader)
    return () => {
      window.removeEventListener('scroll', handleHeader)
    };
  }, [])

  return (
    <header className={prefixCls.join(' ')}>
      <div className="head-container">
        <Logo />
        <Navbar menus={[
          { name: 'Home', link: '/' },
          { name: 'Explore', link: '/explore' },
          { name: 'Blog', link: '/blog' },
          { name: 'Archive', link: '/archive' },
          { name: 'Tools', submenus: [
            { name: 'Converter', link: '/tools/converter' },
          ] },
          { name: 'About', link: '/about' },
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
