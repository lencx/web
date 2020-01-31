---
title: Gatsby FAQ
date: 2020-01-29
type: technology
category: js
spoiler: Gatsby plugin, config, etc.
tags: [gatsby]
# readtime:
---

## FAQ

### [Testing Site with Gatsby Develop from Local LAN](https://github.com/gatsbyjs/gatsby/issues/5801)

```json
// package.json
{
  // ...
  "scripts": {
    // ...
    "develop": "gatsby develop -H 0.0.0.0 -p 6300",
  }
}
```

### [MDX](https://mdxjs.com)

- [RSS - gatsby-plugin-feed-mdx](https://www.gatsbyjs.org/packages/gatsby-plugin-feed-mdx)
- [MDX - gatsby-plugin-mdx](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx)
- [How to convert an existing Gatsby blog to use MDX](https://www.gatsbyjs.org/blog/2019-11-21-how-to-convert-an-existing-gatsby-blog-to-use-mdx)

```js
// gatsby-config.js
{
  // ...,
  plugin: [
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'NoFWL RSS Feed',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1200,
        // fix: disable background-image on gatsby-resp-image-background-image to prevent FOUB
        backgroundColor: 'none',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        // plugins: [
        //   `gatsby-remark-images`,
        // ],
        gatsbyRemarkPlugins: [
          {
            // https://github.com/gatsbyjs/gatsby/issues/16516
            // bug: disable background-image on gatsby-resp-image-background-image to prevent FOUB
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 480,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // ...
            },
          },
        ],
      },
    },
  ]
}
```