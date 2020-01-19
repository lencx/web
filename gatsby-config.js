/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `nofwl`,
    description: `No Free working life`,
    author: `@lencx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // https://www.gatsbyjs.org/docs/sass
    `gatsby-plugin-sass`,
    // https://www.gatsbyjs.org/packages/gatsby-plugin-typescript
    `gatsby-plugin-typescript`,
    // {
    //   resolve: `gatsby-plugin-typescript`,
    //   options: {
    //     isTSX: true, // defaults to false
    //     jsxPragma: `jsx`, // defaults to "React"
    //     allExtensions: true, // defaults to false
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/lencx.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
