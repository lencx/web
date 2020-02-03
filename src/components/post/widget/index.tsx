/**
 * @author: lencx
 * @create_at: Jan 29, 2020
 */

import React from 'react';
import cns from 'classnames';
import { formatReadingTime } from '~utils/helper';
import { XTag, XDate } from '@/icons';

import { PostFrontmatter } from '../interface';

import styles from './widget.mod.scss';

export interface PostWidgetProps {
  dataSource: PostFrontmatter;
  className?: string;
}

export default function PostWidget({ dataSource, className }: PostWidgetProps) {
  const { tags = [], date, spoiler, readtime } = dataSource;
  // console.log(`[10] widget.tsx: `, tags);

  const handleTag = (tag: string) => {
    alert(`TODO: tag - ${tag}`);
  };

  return (
    <div className={cns(className, styles.widget)}>
      {/* time */}
      <div className={styles.time}>
        {date && (
          <time>
            <XDate size={16} />
            {date}
          </time>
        )}
        {readtime && (
          <span
            className={styles.readtime}
            dangerouslySetInnerHTML={{ __html: formatReadingTime(readtime) }}
          />
        )}
      </div>
      {/* tags */}
      {Array.isArray(tags) && (
        <div className={styles.tags}>
          <XTag size={18} className={styles.tagsicon} />
          {tags.map((tag: string, idx: number) => {
            return (
              <span onClick={() => handleTag(tag)} key={`${tag}-${idx}`}>
                {tag}
              </span>
            );
          })}
        </div>
      )}
      {/* spoiler */}
      {spoiler && <p className={styles.spoiler}>{spoiler}</p>}
    </div>
  );
}
