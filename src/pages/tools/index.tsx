/**
 * @author: lencx
 * @create_at: Jan 27, 2020
 */

import React from 'react';
import Layout from '~layout/post';
import { Link } from 'gatsby';
import SEO from '~common/seo';

export default function Tools() {
  return (
    <Layout>
      <SEO title="Tools" />
      <h2>Tools</h2>
      <ul>
        <li>
          <Link to="/tools/converter">Converter Tools</Link>
        </li>
      </ul>
    </Layout>
  );
}
