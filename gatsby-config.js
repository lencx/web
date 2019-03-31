module.exports = {
  siteMetadata: {
    title: `lencx's blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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
        name: `lencx's Blog`,
        short_name: `lx`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `pink`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/lencx.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
