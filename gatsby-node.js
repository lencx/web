/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const supportedLangs = require('./i18n');

const langs = Object.keys(supportedLangs);

// webpack config
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

// https://github.com/gatsbyjs/gatsby-starter-blog
// create static pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // post template
  const postTpl = path.resolve('./src/templates/post.tsx');

  // console.log('[30] gatsby-node.js: ', postTpl);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 10000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    const slug = post.node.fields.slug;

    createPage({
      path: slug,
      component: postTpl,
      context: {
        slug,
        previous,
        next,
      },
    });
  });

  // return postTpl;
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    // index.zh-hant.md => zh-hant
    const ext = path
      .basename(node.fileAbsolutePath)
      .match(/^([\w-_]+.)(.*).mdx?$/);
    let _lang = null;
    if (langs.includes(ext[2])) _lang = ext[2];

    // path
    createNodeField({
      node,
      name: `slug`,
      value,
    });
    // field: post name
    // the same article may be in multiple languages,
    // if `directoryName` is the same, they should belong to the same group.
    createNodeField({
      node,
      name: 'directoryName',
      value: path.basename(path.dirname(node.fileAbsolutePath)),
    });
    // field: post language(i18n)
    createNodeField({
      node,
      name: 'lang',
      value: _lang,
    });
  }
};
