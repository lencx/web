/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';
import SEO from '~common/seo';
import Header from '~layout/header';
import ChasmChart from '@/charts/chasm';

import './index.scss';

export default function IndexPage() {
  return (
    <>
      <SEO title="nofwl" />
      <Header className="nofwl-header" isHome />
      <ChasmChart />
    </>
  );
}
