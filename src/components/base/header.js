import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import ToggleTheme from './toggleTheme';

const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

const Header = ({ siteTitle, _siteDesc }) => {
  const [prefixCls, setPrefixCls] = useState(['nofwl-header']);
  let prevY = 0;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const headY = getScrollPosition().y;
      const showHead = headY < 200 || prevY > headY;
      setPrefixCls([
        ...prefixCls,
        showHead ? 'head__pinned' : 'head__unpinned',
      ]);
      prevY = headY;
    })
  }, [0])

  return (
    <header className={prefixCls.join(' ')}>
      <div className="head-container">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <span className="nofwl-title">{siteTitle}</span>
            {/* <span className="nofwl-desc">{siteDesc}</span> */}
          </Link>
        </h1>
        <ToggleTheme />
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
