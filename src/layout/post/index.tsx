/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import Header from '~layout/header';
import Footer from '~layout/footer';
import '~styles';
import styles from './index.mod.scss';

interface PostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
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
    <div className={styles.post}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
