/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @author: lencx
 * @create_at: Jan 23, 2020
 */

import React from 'react';
import { graphql, Link } from 'gatsby';
import PostLayout from '~layout/post';
import { BlogIndexTemplateProps } from './interface';
const { defaultLanguage, baseURL } = require('../../config');

export default function BlogIndexTemplate(props: BlogIndexTemplateProps) {
  const data = props.data.allMarkdownRemark.nodes;
  // console.log(`[23] post.tsx: `, props);
  return (
    <PostLayout>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      {data.map(item => {
        return (
          item.fields.lang === defaultLanguage && (
            <div key={item.id}>
              <Link to={`${baseURL}/${item.fields.slug}`}>
                <h2>{item.frontmatter.title}</h2>
              </Link>
              <p>{item.frontmatter.spoiler}</p>
              <pre>{JSON.stringify(item, null, 4)}</pre>
            </div>
          )
        );
      })}
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    </PostLayout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        frontmatter {
          category
          date
          readtime
          spoiler
          tags
          title
          type
        }
        fields {
          slug
          directoryName
          lang
        }
      }
    }
  }
`;
