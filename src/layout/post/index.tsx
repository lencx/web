/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

import React, { useEffect } from 'react';
import cns from 'classnames';
// import { useStaticQuery, graphql } from 'gatsby';
import Header from '~layout/header';
import Footer from '~layout/footer';
import BackTop from '~comps/backtop';
import '@/styles';

import styles from './post.mod.scss';

export interface PostLayoutProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  mainProps?: React.HTMLAttributes<HTMLElement>;
}

export default function PostLayout({
  children,
  style,
  mainProps,
  className,
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
  useEffect(() => {
    const html: any = document.querySelector('html');
    html.setAttribute('type', 'nofwl-blog');
    return () => {
      html.setAttribute('type', 'nofwl');
    };
  }, []);

  return (
    <div className={cns(styles.post, className, 'nofwl-post')} style={style}>
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
