/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~common': path.resolve(__dirname, 'src/common'),
        '~layout': path.resolve(__dirname, 'src/layout'),
        '~comps': path.resolve(__dirname, 'src/components'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~utils': path.resolve(__dirname, 'src/utils'),
        '~assets': path.resolve(__dirname, 'src/assets'),
      },
    },
  });
};
