import React from 'react';
import { Link } from 'gatsby';
import NofwlIcon from './../../assets/nofwl.png';

export default () => {
  return (
    <Link
      className="logo"
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <img src={NofwlIcon} alt="nofwl-logo" />
      {/* <div style={{ backgroundImage: `url(${NofwlIcon})` }}></div> */}
      {/* <span className="nofwl-title">{siteTitle}</span> */}
      {/* <span className="nofwl-desc">{siteDesc}</span> */}
    </Link>
  )
}