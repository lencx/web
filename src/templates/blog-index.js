import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

// import SEO from "../components/seo"
import Layout from '../components/base/layout'
import PostWidget from '../components/PostWidget'
import { formatReadingTime } from '../utils/helper'

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
    <Layout className="nl_blog post_index">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      {posts.map(({ node }) => {
        // console.log(node);
        const post = node.frontmatter;
        return (
          <article key={`${post.title}_${post.date}`}>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              <h2>{post.title}</h2>
            </Link>
            <PostWidget
              date={post.date}
              category={post.category}
              readTime={formatReadingTime(post.readtime || node.timeToRead)}
            />
            {/* {post.category && <span>category: {post.category}</span>} */}
            <p className="spoiler"> {post.spoiler}</p>
            {/* <div dangerouslySetInnerHTML={{ __html: node.html }}></div> */}
          </article>
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
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            category
            readtime
          }
        }
      }
    }
  }
`
