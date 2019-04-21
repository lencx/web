import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/base/layout';

// import Helmet from 'react-helmet';

// blogPost
export default (props) => {
  const post = props.data.markdownRemark;
  // const siteTitle = this.props.data.site.siteMetadata.title;
  const { previous, next, translations, translationLinks } = props.pageContext;
  return (
    <Layout>
      <div className="nl_post">
        <h1>{post.frontmatter.title}</h1>
        <p>spoiler: {post.frontmatter.spoiler}</p>
        <p>
          {translations.map(item => <span key={item}>
            {/* {console.log(item, translationLinks[item])} */}
            <Link to={translationLinks[item]} rel="translations">
              {item} /
            </Link>
          </span>)}
        </p>
        <span>category: {post.frontmatter.category}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        { previous && (
          <Link
            to={previous.fields.slug}
            rel="prev"
            style={{ marginRight: 20 }}
          >
            ← {previous.frontmatter.title}
          </Link>
        )}
        { next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        category
      }
      fields {
        slug
      }
    }
  }
`
