// more: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path');
// const { createFilePath } = require('gatsby-source-filesystem');
const { supportedLanguages } = require('./i18n');
// const { maybeAbsoluteLinks } = require('./config');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // TODO
  // maybeAbsoluteLinks.forEach(({ isPermanent = true, redirectInBrowser = true, ...rest }) => {
  //   createRedirect({
  //     ...link,
  //     isPermanent,
  //     redirectInBrowser,
  //   })
  // })


  return new Promise((resolve, _reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js');
    Object.keys(supportedLanguages).forEach(langKey => {
      createPage({
        path: langKey === 'en' ? '/' : `/${langKey}/`,
        component: path.resolve('./src/templates/blog-index.js'),
        context: {
          langKey,
        },
      });
    });

    resolve(graphql(`{
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              langKey
              directoryName
            }
            frontmatter {
              title
            }
          }
        }
      }
    }`)
    .then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
        return;
      }
      // console.log(JSON.stringify(result));
      const allPosts = result.data.allMarkdownRemark.edges;

      // all posts path
      // const allSlugs = allPosts.reduce((result, post) => {
      //   result.add(post.node.fields.slug);
      //   return result;
      // }, new Set());

      const translationsByDirectory = allPosts.reduce((result, post) => {
        const { directoryName, langKey } = post.node.fields;
        if (directoryName && langKey && langKey !== 'en') {
          (result[directoryName] || (result[directoryName] = [])).push(langKey);
        }
        return result;
      }, {});

      // console.log(JSON.stringify(translationsByDirectory));
      // console.log(JSON.stringify(allPosts), 'allSlugs');

      // const defaultLangPosts = allPosts.filter(({ node }) => node.fields.langKey === 'en');

      allPosts.map((post, index) => {
        // Page turning
        const previous = index === 0 ? null : allPosts[index - 1].node;
        const next = index === allPosts.length - 1 ? null : allPosts[index + 1].node;

        const dirName = post.node.fields.directoryName;
        const translations = translationsByDirectory[dirName] || [];

        let translationLinks = {};
        translations.map(lang => translationLinks[lang] = `/${lang}/${dirName}`)

        createPage({
          path: post.node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
            translations,
            translationLinks,
          }
        })
      })
    }))
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'directoryName',
      value: path.basename(path.dirname(node.fileAbsolutePath)),
    });
  }
}

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({ });
// };