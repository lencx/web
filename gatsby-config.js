module.exports = {
  siteMetadata: {
    title: `NoFWL`,
    description: `No free working life`,
    author: `lencx`,
    social: {
      twitter: `lencx`
    }
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    { // md -> html
      resolve: `gatsby-transformer-remark`,
      optional: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600
            }
          }
        ]
      }
    },
    { // blog-post
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `blog`,
      },
    },
    { // blog-assets
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NoFWL`,
        short_name: `nofwl`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `pink`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/nofwl.png`, // This path is relative to the root of the site.
      },
    },
    { // dart-sass
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
