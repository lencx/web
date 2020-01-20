import React from 'react';
import { graphql } from 'gatsby';
import PostLayout from '~layout/post';

interface PostTemplateProps {
  readonly data: PostQueryData;
  readonly pageContext: {
    previous?: any;
    next?: any;
  };
}

interface PostQueryData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  markdownRemark: {
    id?: string;
    excerpt?: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
    };
  };
}

export default function postTemplate(props: PostTemplateProps) {
  const post = props.data.markdownRemark;
  console.log(`[23] post.tsx: `, props);
  return (
    <PostLayout>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostLayout>
  );
}

export const query = graphql`
  query mdBlogPost($slug: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
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
