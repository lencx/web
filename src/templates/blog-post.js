import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/base/layout'
import withUtterances from '../components/withUtterances'

// blogPost
const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark
  // const siteTitle = this.props.data.site.siteMetadata.title;
  const { previous, next, translations, translationLinks } = props.pageContext
  // console.log(post)
  const _type = post.frontmatter.type
  const cls = _type ? ` ${_type}` : ''

  return (
    <Layout className={`nl_blog${cls}`}>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <link
          rel="author"
          href="https://github.com/lencx"
        />
        <meta
          name="description"
          content={
            post.frontmatter.spoiler
              ? post.frontmatter.spoiler
              : post.excerpt
          }
        />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta name="twitter:description" content={post.excerpt} />
      </Helmet>
      <div className="nl_post">
        <h1>{post.frontmatter.title}</h1>
        {/* <p>spoiler: {post.frontmatter.spoiler}</p> */}
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
        <div className="nofwl_comment" />
      </div>
    </Layout>
  )
}

export default withUtterances(BlogPostTemplate, '.nofwl_comment', 'lencx/nofwl-utterances')
// export default BlogPostTemplate

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
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        category
        type
      }
      fields {
        slug
      }
    }
  }
`
