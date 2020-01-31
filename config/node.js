/**
 * @author: lencx
 * @create_at: Jan 28, 2020
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { supportedLangs, defaultLanguage, baseURL } = require('.');

const langs = Object.keys(supportedLangs);

// https://github.com/gatsbyjs/gatsby-starter-blog
// create static pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // post template
  const blogIndexTemplate = path.resolve('./src/templates/blog_index.tsx');
  const blogPostTemplate = path.resolve('./src/templates/blog_post.tsx');
  const webIndex = path.resolve('./src/templates/index.tsx');

  createPage({
    path: `/`,
    component: webIndex,
  });

  // console.log('[30] gatsby-node.js: ', postTpl);

  const result = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 10000
      ) {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
              lang
              directoryName
            }
            internal {
              type
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
  const posts = result.data.allMdx.edges;

  const defaultLangPosts = [],
    translationsByDirectory = {};
  posts.forEach(post => {
    const langKey = post.node.fields.lang;
    const hasLang = langs.includes(langKey);

    if (post.node.fields.lang === defaultLanguage) {
      defaultLangPosts.push(post);
    } else {
      const dirName = post.node.fields.directoryName;
      // console.log('[68] node.js: ', post);
      translationsByDirectory[dirName] = [
        ...(translationsByDirectory[dirName] || []),
        {
          slug: post.node.fields.slug,
          lang: langKey,
          directoryName: dirName,
        },
      ];
    }

    // language page
    createPage({
      path:
        langKey === defaultLanguage
          ? baseURL
          : hasLang
          ? `${baseURL}/${langKey}/`
          : baseURL,
      component: blogIndexTemplate,
      context: {
        langKey,
      },
    });
  });

  // console.log('[88] node.js: ', translationsByDirectory);
  Object.keys(translationsByDirectory).forEach(key => {
    translationsByDirectory[key].map(post => {
      createPage({
        path: post.slug,
        component: blogPostTemplate,
        context: {
          slug: post.slug,
          directoryName: post.directoryName,
          lang: post.lang,
          otherLangs: translationsByDirectory[key],
        },
      });
    });
  });

  // post page
  defaultLangPosts.forEach((post, index) => {
    const previous =
      index === defaultLangPosts.length - 1
        ? null
        : defaultLangPosts[index + 1].node;
    const next = index === 0 ? null : defaultLangPosts[index - 1].node;
    const slug = post.node.fields.slug;

    // post page
    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug,
        previous: next,
        next: previous,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    // get language from file name
    // index.zh-hant.md => zh-hant
    const ext = path
      .basename(node.fileAbsolutePath)
      .match(/^([\w-_]+.)(.*).mdx?$/);
    let _lang = defaultLanguage;
    if (ext && ext[2] && langs.includes(ext[2])) _lang = ext[2];

    // path
    createNodeField({
      node,
      name: `slug`,
      value:
        _lang === defaultLanguage
          ? `${baseURL}${value}`
          : `${baseURL}/${_lang}${value}`.replace(/(\/[\w-_.]+\/)$/, '/'),
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
