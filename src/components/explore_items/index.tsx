/**
 * @author: lencx
 * @create_at: Aug 02, 2020
 */

import React from 'react';
import { navigate } from 'gatsby';

import styles from './ei.mod.scss';

export interface ExploreItemProps {
  url: string;
  title: string;
  cover: string;
  desc?: string;
}

export interface ExploreItemsProps {
  dataSource: Array<ExploreItemProps>;
}

export function ExploreItem(props: ExploreItemProps) {
  const { title, cover, url, desc } = props;
  const imgUrl = require(`@/assets/${cover ? `cover/${cover}` : 'lencx.png'}`);
  return (
    <div
      className={styles.explore_item}
      onClick={() =>
        /^http/.test(url) ? (window.location.href = url) : navigate(url)
      }
    >
      <div className={styles.box} style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className={styles.cont}>
          <h3>{title}</h3>
          {desc && <p>{desc}</p>}
        </div>
      </div>
    </div>
  );
}

export default function ExploreItems({ dataSource }: ExploreItemsProps) {
  return (
    <div className={styles.explore_items}>
      {dataSource.map((item: ExploreItemProps) => (
        <ExploreItem key={item.title} {...item} />
      ))}
    </div>
  );
}
