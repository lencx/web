/**
 * @author: lencx
 * @create_at: Jan 27, 2020
 */

import React from 'react';
import Layout from '~layout/post';
import SEO from '~common/seo';
import ExploreItems from '~comps/explore_items';

const EXPLORE_ITEMS = [
  {
    title: 'Music',
    url: 'https://music.nofwl.com',
    cover: 'music.png',
    desc: 'music generator',
  },
];

export default function Explore() {
  return (
    <Layout>
      <SEO title="Explore" />
      <ExploreItems dataSource={EXPLORE_ITEMS} />
    </Layout>
  );
}
