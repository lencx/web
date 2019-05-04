import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/base/layout'
import Community from '../components/Community'
// import SEO from '../components/base/seo'

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <h1>About</h1>
    <Community />
  </Layout>
)

export default AboutPage
