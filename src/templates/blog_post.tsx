/**
 * @author: lencx
 * @create_at: Jan 20, 2020
 */

import React from 'react';
import { graphql } from 'gatsby';
import cns from 'classnames';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PostLayout from '~layout/post';
import { PostTemplateProps, PostWidget, PostLangs } from '~comps/post';
import PrevNext from '~comps/pagination/prev_next';
import withUtterances from '~hooks/withUtterances';
import SEO from '~common/seo';
import TableOfContents from '~comps/table_of_contents';
import QRCodeGenerator from '~comps/qrcode_generator';

function postTemplate(props: PostTemplateProps) {
  const post = props.data.mdx;
  // console.log(`[15] blog_post.tsx: `, props);
  const _data = post.frontmatter;
  const _page = props.pageContext;
  const otherLangs = _page.otherLangs;
  return (
    <PostLayout className={cns('blog', `blog_${_data.type}`)}>
      <SEO title={_data.title} />
      <QRCodeGenerator url={window.location.href} />
      <div className="blog__container">
        {`blog_${_data.type}` === 'blog_technology' && (
          <TableOfContents className="blog-toc" headings={post.headings} />
        )}
        <article className="blog-article">
          {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
          <h1 className="title">{_data.title}</h1>
          <PostWidget className="post-widget" dataSource={_data} />
          <PostLangs
            originURL={_page.originURL}
            lang={_page.lang}
            dataSource={otherLangs}
            defaultLang={post.fields.defaultLang}
          />
          <MDXRenderer>{post.body}</MDXRenderer>
          <PrevNext dataSource={props.pageContext} />
          <div className="nofwl_comment" />
        </article>
      </div>
    </PostLayout>
  );
}

export default withUtterances({
  container: '.nofwl_comment',
  repo: 'lencx/ntalk',
  term: 'og:title',
})(postTemplate);

export const query = graphql`
  query mdxBlogPost($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
        lang
        defaultLang
        directoryName
      }
      frontmatter {
        type
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        readtime
      }
      headings {
        value
        depth
      }
    }
  }
`;
