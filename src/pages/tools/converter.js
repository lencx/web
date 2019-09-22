import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '~components/base/layout'
import ColorConverter from '~components/ColorConverter'
import ConverterIcon from '~components/icon/ConverterIcon'

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Tools/Converter</title>
      </Helmet>
      <h2>
        <ConverterIcon
          fill="var(--common-color)"
          style={{ marginRight: 5, verticalAlign: -3 }}
          height={24}
          width={24}
        /> Converter
      </h2>
      <ColorConverter />
    </Layout>
  )
}