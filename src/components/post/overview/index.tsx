/**
 * @author: lencx
 * @create_at: Jan 28, 2020
 */

import React from 'react';
import { Link } from 'gatsby';
import { PostOverviewData } from '../interface';
import PostWidget from '../widget';

import styles from './overview.mod.scss';

export interface PostOverviewProps {
  dataSource: PostOverviewData;
}

export default function PostOverview({ dataSource }: PostOverviewProps) {
  const _data = dataSource.frontmatter;
  const _fields = dataSource.fields;
  return (
    <div className={styles.post}>
      <h2>
        <Link to={_fields.slug}>{_data.title}</Link>
      </h2>
      <PostWidget dataSource={_data} />
    </div>
  );
}
