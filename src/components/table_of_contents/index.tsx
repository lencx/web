/**
 * @author: lencx
 * @create_at: Apr 12, 2020
 */

import React, { useEffect } from 'react';
import cns from 'classnames';
import GithubSlugger from 'github-slugger';
import { navigate } from 'gatsby';

import styles from './toc.mod.scss';

const slugger = new GithubSlugger();

export interface TableOfContentsProps {
  className?: string;
  headings?: any;
}

// WebpackError: ReferenceError: window is not defined
const isWin = typeof window !== `undefined`;

export default function TableOfContents(props: TableOfContentsProps) {
  useEffect(() => {
    if (isWin) {
      const hash = decodeURIComponent(window.location.hash);
      if (hash) {
        navigate(`${window.location.pathname}${hash}`);
      }
    }
  }, []);

  const data = props.headings || [];

  return (
    <div className={cns(props.className, styles.toc)}>
      {/* <pre>{JSON.stringify(props.headings)}</pre> */}
      <div>
        <ul>
          {data.map((heading: any, idx: number) => {
            const uri = `#${slugger.slug(heading.value)}`;
            slugger.reset();
            const active =
              isWin && decodeURIComponent(window.location.hash) === uri;
            return (
              <li
                key={heading.value + idx}
                className={cns(styles[`toc_level_${heading.depth}`], {
                  [styles.active]: active,
                })}
              >
                <span
                  onClick={() => {
                    navigate(`${window.location.pathname}${uri}`);
                  }}
                >
                  {heading.value}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
