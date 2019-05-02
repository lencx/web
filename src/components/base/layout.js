/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import preCode from '../../utils/codenum';

import './layout.scss';
import '../../styles';

const Layout = ({ children, className }) => {
  useEffect(preCode, []);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => {
        // const { title, description } = data.site.siteMetadata;
        return (
          <div className={className}>
            {/* <Header siteTitle={title} siteDesc={description} /> */}
            <Header />
            <div className="nofwl-container">
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://github.com/lencx/nofwl">nofwl</a>
              </footer>
            </div>
          </div>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
