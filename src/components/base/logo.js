import React from 'react';
import { Link } from 'gatsby';
import NofwlIcon from '../../assets/nofwl.png';
import Button from '../Button'

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
      <Button style={{ padding: 1, borderRadius: '50%' }}>

      <img src={NofwlIcon} alt="nofwl-logo" />
      </Button>
      {/* <div style={{ backgroundImage: `url(${NofwlIcon})` }}></div> */}
      {/* <span className="nofwl-title">{siteTitle}</span> */}
      {/* <span className="nofwl-desc">{siteDesc}</span> */}
    </Link>
  )
}