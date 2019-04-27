// more: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path');
// const { createFilePath } = require('gatsby-source-filesystem');
const { supportedLanguages } = require('./i18n');

const defaultLanguage = 'en';
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
    const blogIndexTemplate = path.resolve('./src/templates/blog-index.js');
    Object.keys(supportedLanguages).forEach(langKey => {
      createPage({
        path: langKey === defaultLanguage ? '/blog' : `/blog${langKey}/`,
        component: blogIndexTemplate,
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

      const defaultLangPosts = allPosts.filter(post => post.node.fields.langKey === defaultLanguage)

      defaultLangPosts.map((post, index) => {
        const { directoryName, slug } = post.node.fields;
        const previous = index === 0 ? null : defaultLangPosts[index - 1].node;
        const next = index === defaultLangPosts.length - 1 ? null : defaultLangPosts[index + 1].node;
        // console.log(langKey, directoryName, translationsByDirectory);
        // console.log(post, index);

        let translationLinks = {};
        const translations = translationsByDirectory[directoryName] || [];
        translations.map(lang => {
          translationLinks[lang] = `/${lang}/${directoryName}/`;
        });

        // console.log('translations', directoryName, translations);
        createPage({
          path: slug,
          component: blogPostTemplate,
          context: {
            slug,
            translations,
            translationLinks,
            previous,
            next
          }
        });
        // if (langKey === defaultLanguage) {
        //   // Page turning
        // } else {
        //   translationLinks['raw'] = `/${directoryName}/`;
        //   translations.pop('raw');
        //   createPage({
        //     path: slug,
        //     component: blogPostTemplate,
        //     context: {
        //       slug,
        //       translations,
        //       translationLinks,
        //     }
        //   })
        // }
      });
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