import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

// import SEO from "../components/seo"
import Layout from '../components/base/layout';

// blogIndex
export default (props) => {
  const { data } = props
  const posts = data.allMarkdownRemark.edges
    .filter(({ node }) => node.fields.langKey === 'en')
  // const langKey = pageContext.langKey
  // console.log(data.allMarkdownRemark.edges, '------', langKey);
  // .filter(item => item.defaultLang === 'en')
  // console.log(data)
  return (
    <Layout className="nl_blog">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      {posts.map(({ node }) => {
        // console.log(node);
        const post = node.frontmatter;
        return (
          <div key={`${post.title}_${post.date}`}>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              <h2>{post.title} - <i>{post.date}</i></h2>
            </Link>
            {post.category && <span>category: {post.category}</span>}
            <p> {post.spoiler}</p>
            {/* <div dangerouslySetInnerHTML={{ __html: node.html }}></div> */}
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            category
          }
        }
      }
    }
  }
`
