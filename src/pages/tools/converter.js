import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '~components/base/layout'
import ColorConverter from '~components/ColorConverter'

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Tools/Converter</title>
      </Helmet>
      <h2>Converter</h2>
      <ColorConverter />
    </Layout>
  )
}