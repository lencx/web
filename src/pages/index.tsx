/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';
import SEO from '~common/seo';
import Header from '~layout/header';
import ChasmChart from '@/charts/chasm';

import './index.scss';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header className="home-header" />
    <ChasmChart />
  </>
);

export default IndexPage;
