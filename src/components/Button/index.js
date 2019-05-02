import React from 'react'

import './index.scss'

export default ({ children, className, ...rest }) => (
  <button
    {...rest}
    className={`nl_btn ${className}`}
  >
    {children}
  </button>
)