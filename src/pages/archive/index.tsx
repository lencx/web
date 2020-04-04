/**
 * @author: lencx
 * @create_at: Jan 27, 2020
 */

import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '~layout/post';
import SEO from '~common/seo';
import { dateFormat } from '~utils/tools';

import styles from './archive.mod.scss';

export interface ArchiveProps {
  data: any;
}

export default function Archive(props: ArchiveProps) {
  const allPost = props.data.allMdx.edges || [];
  return (
    <Layout>
      <SEO title="Archive" />
      <ul className={styles.list}>
        {allPost.map((post: any) => {
          const data = post.node;
          return (
            <li key={data.id}>
              <time>{dateFormat(data.frontmatter.date)}</time>
              <Link to={data.fields.slug}>
                <span>{data.frontmatter.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { lang: { eq: "en" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`;
