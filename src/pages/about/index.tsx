/**
 * @author: lencx
 * @create_at: Jan 25, 2020
 */

import React from 'react';
import Layout from '~layout/post';
import SEO from '~common/seo';

import styles from './about.mod.scss';

interface LinkItem {
  name?: string;
  link?: string;
  desc?: string;
}

export function LinkItems({
  dataSource,
  linkKey = 'name',
}: {
  linkKey?: 'name' | 'desc';
  dataSource: LinkItem[];
}) {
  return (
    <div>
      {dataSource.map((item: any, idx) => {
        const renderTxt = (val: any = '') => {
          if (!val) return null;
          return linkKey === val ? (
            <a href={item.link}>{item[val]}</a>
          ) : (
            <span>{item[val]}</span>
          );
        };
        return (
          <p className={styles.proj_item} key={`${item.name}-${idx}`}>
            {renderTxt('name')}
            {': '}
            {renderTxt('desc')}
          </p>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <h3>About</h3>
      <LinkItems
        linkKey="desc"
        dataSource={[
          {
            name: 'GitHub',
            desc: 'lencx',
            link: 'https://github.com/lencx/nofwl',
          },
          {
            name: 'Email',
            desc: 'cxin1314@gmail.com',
            link: 'mailto:cxin1314@gmail.com?subject=NoFWL',
          },
        ]}
      />
      <h3>Project</h3>
      <LinkItems
        dataSource={[
          {
            name: 'nofwl',
            link: 'https://github.com/lencx/nofwl',
            desc: 'Gatsby blog theme',
          },
          {
            name: 'genFile',
            link: 'https://github.com/nofwl/genFile',
            desc: 'Generate file in nodejs',
          },
          {
            name: 'tx',
            link: 'https://github.com/nofwl/genFile',
            desc: 'Generate file in nodejs',
          },
        ]}
      />
    </Layout>
  );
}
