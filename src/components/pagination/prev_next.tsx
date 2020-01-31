/**
 * @author: lencx
 * @create_at: Jan 31, 2020
 */

import React from 'react';
import { Link } from 'gatsby';
import { PageContext } from '~comps/post/interface';

import styles from './prev_next.mod.scss';

export default function PrevNext({ dataSource }: { dataSource: PageContext }) {
  console.log(`[10] prev_next.tsx: `, dataSource);
  const { previous, next } = dataSource;
  return (
    <div>
      {(previous || next) && (
        <div className={styles.prev_next}>
          {previous && (
            <Link
              to={previous.fields.slug}
              rel="prev-post"
              style={{ marginRight: 20 }}
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next-post">
              {next.frontmatter.title} →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
