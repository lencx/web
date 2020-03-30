/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @author: lencx
 * @create_at: Jan 23, 2020
 */

import React from 'react';
import { graphql } from 'gatsby';
import PostLayout from '~layout/post';
import { PostOverview, BlogIndexTemplateProps } from '~comps/post';
import SEO from '~common/seo';

export default function BlogIndexTemplate(props: BlogIndexTemplateProps) {
  const data = props.data.allMdx.nodes;
  // console.log(`[23] post.tsx: `, props.pageContext);
  return (
    <PostLayout>
      <SEO title="Blog" />
      {data.map(item => {
        return <PostOverview key={item.id} dataSource={item} />;
      })}
    </PostLayout>
  );
}

export const query = graphql`
  query allMdxBlogPost($langKey: String) {
    allMdx(
      filter: { fields: { lang: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          category
          date(formatString: "MMMM DD, YYYY")
          readtime
          spoiler
          tags
          title
          type
          readtime
        }
        fields {
          slug
          lang
          directoryName
          defaultLang
        }
      }
    }
  }
`;
