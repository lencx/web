/**
 * @author: lencx
 * @create_at: Jan 20, 2020
 */

import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PostLayout from '~layout/post';
import { PostTemplateProps, PostWidget } from '~comps/post';

export default function postTemplate(props: PostTemplateProps) {
  const post = props.data.mdx;
  const _data = post.frontmatter;
  // console.log(`[23] post.tsx: `, props);
  return (
    <PostLayout className="blog">
      <h1 className="title">{_data.title}</h1>
      <PostWidget className="post-widget" dataSource={_data} />
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      <MDXRenderer>{post.body}</MDXRenderer>
    </PostLayout>
  );
}

export const query = graphql`
  query mdBlogPost($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        directoryName
        lang
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        readtime
      }
      body
    }
  }
`;
