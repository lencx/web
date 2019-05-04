import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/base/layout'

const ArchivePage = () => (
  <Layout>
    <Helmet>
      <title>Archive</title>
    </Helmet>
    <h1>Archive</h1>
    <ul>
      <li>blog::dateSort</li>
      <li>blog::category - technology, thinking ...</li>
      <li>nofwlType: blog, tools ...</li>
      <li>...</li>
    </ul>
  </Layout>
)

export default ArchivePage
