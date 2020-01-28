/**
 * @author: lencx
 * @create_at: Jan 20, 2020
 */

import React from 'react';
import { graphql } from 'gatsby';
import PostLayout from '~layout/post';
import { PostTemplateProps } from '~comps/post/interface';

export default function postTemplate(props: PostTemplateProps) {
  const post = props.data.markdownRemark;
  // console.log(`[23] post.tsx: `, props);
  return (
    <PostLayout>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostLayout>
  );
}

export const query = graphql`
  query mdBlogPost($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        directoryName
        lang
      }
      html
    }
  }
`;
