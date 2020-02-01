/**
 * @author: lencx
 * @create_at: Feb 01, 2020
 */

import React from 'react';
import { Link } from 'gatsby';

import styles from './lang.mod.scss';

export default function PostLangs({
  originURL = '',
  lang = '',
  defaultLang = '',
  dataSource = [],
}: {
  lang?: string;
  originURL?: string;
  defaultLang?: string;
  dataSource?: any;
}) {
  console.log(`[18] index.tsx: `, lang, defaultLang);
  if (!dataSource.length) return null;
  return (
    <div className={styles.post_langs}>
      {lang === defaultLang ? (
        <b>Original</b>
      ) : (
        <Link to={originURL}>Original</Link>
      )}

      {dataSource.map((item: any) => {
        return (
          <span key={item.lang}>
            <b className={styles.symbol}>{' • '}</b>
            {lang === item.lang ? (
              <b>{item.lang}</b>
            ) : (
              <Link to={item.slug}>{item.lang}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
