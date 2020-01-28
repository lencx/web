/**
 * @author: lencx
 * @create_at: Jan 28, 2020
 */

import React from 'react';
import { Link } from 'gatsby';
import { PostOverviewData } from './interface';

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
      {_data.date}
      <div className={styles.tags}>
        {Array.isArray(_data.tags) &&
          _data.tags.map((tag, idx) => {
            return <span key={`${tag}-${idx}`}>{tag}</span>;
          })}
      </div>
      <p className={styles.spoiler}>{_data.spoiler}</p>
      {/* <pre>{JSON.stringify(dataSource, null, 4)}</pre> */}
    </div>
  );
}
