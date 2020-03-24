/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

const node = require('./config/node');

// webpack config
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // https://github.com/gaearon/react-hot-loader/issues/1227
        // React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.
        'react-dom': '@hot-loader/react-dom',
        '~common': path.resolve(__dirname, 'src/common'),
        '~layout': path.resolve(__dirname, 'src/layout'),
        '~comps': path.resolve(__dirname, 'src/components'),
        '~post': path.resolve(__dirname, 'src/post'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~utils': path.resolve(__dirname, 'src/utils'),
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};

// https://github.com/gatsbyjs/gatsby-starter-blog
// create static pages
exports.createPages = node.createPages;

// create node and fields
exports.onCreateNode = node.onCreateNode;
