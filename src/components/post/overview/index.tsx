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
  baseURL: string;
  dataSource: PostOverviewData;
}

export default function PostOverview({
  baseURL,
  dataSource,
}: PostOverviewProps) {
  const _data = dataSource.frontmatter;
  const _fields = dataSource.fields;
  return (
    <div className={styles.post}>
      <Link to={`${baseURL}/${_fields.slug}`}>
        <h2>{_data.title}</h2>
      </Link>
      <PostWidget tags={_data.tags} date={_data.date} spoiler={_data.spoiler} />
    </div>
  );
}
