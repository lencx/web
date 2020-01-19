import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '~comps/header';
import './layout.css';

interface PostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://github.com/lencx/nofwl">nofwl</a>
        </footer>
      </div>
    </>
  );
}
