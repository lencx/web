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
    title: 'music',
    url: 'https://music.nofwl.com',
    cover: 'music.png',
    desc: 'music generator',
  },
  {
    title: 'MTC',
    url: 'https://mtc.nofwl.com',
    cover: 'mtc.png',
    desc: 'my tools & config, and awesome lists',
  },
  {
    title: 'short-link',
    url: 'https://s.nofwl.com/-',
    cover: 'short-link.png',
    desc: 'link shortener',
  },
  {
    title: 'vue3-examples',
    url: 'https://vue.nofwl.com',
    cover: 'calendar.png',
    desc: 'Vue3 Examples(calendar)',
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
