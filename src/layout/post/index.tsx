/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import Header from '~layout/header';
import Footer from '~layout/footer';
import BackTop from '~comps/backtop';
import '@/styles';

import styles from './post.mod.scss';

export interface PostLayoutProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  mainProps?: React.HTMLAttributes<HTMLElement>;
}

export default function PostLayout({
  children,
  style,
  mainProps,
}: PostLayoutProps) {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <div className={styles.post} style={style}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header />
      <main className={styles.main} {...mainProps}>
        {children}
      </main>
      <Footer />
      <BackTop />
    </div>
  );
}
