/**
 * @author: lencx
 * @create_at: Jan 29, 2020
 */

import React from 'react';
import cns from 'classnames';

import styles from './widget.mod.scss';

export interface PostWidgetProps {
  className?: string;
  tags?: string[];
  date?: string;
  spoiler?: string;
}

export default function PostWidget({
  tags = [],
  date,
  spoiler,
  className,
}: PostWidgetProps) {
  // console.log(`[10] widget.tsx: `, tags);
  return (
    <div className={cns(className, styles.widget)}>
      {/* date */}
      {date && <time>{date}</time>}
      {/* tags */}
      {Array.isArray(tags) && (
        <div className={styles.tags}>
          {tags.map((tag: string, idx: number) => {
            return <span key={`${tag}-${idx}`}>{tag}</span>;
          })}
        </div>
      )}
      {/* spoiler */}
      {spoiler && <p>{spoiler}</p>}
    </div>
  );
}
