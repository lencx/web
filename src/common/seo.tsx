/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 *
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const now = new Date();

export interface SeoProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Array<{
    name: string;
    content: string;
  }>;
}

export default function SEO({
  description,
  lang = 'en',
  meta = [],
  title,
}: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={
        {
          lang,
          style:
            `${now.getMonth() + 1}.${now.getDate()}` === '4.4'
              ? `filter: grayscale(1)`
              : '',
        } as any
      }
      title={title}
      titleTemplate={`%s · ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}
