/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';

import Layout from '~layout/post';
import SEO from '~common/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
