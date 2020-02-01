/* eslint-disable no-var */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// www.gatsbyjs.org/packages/gatsby-remark-prismjs
require('prismjs/plugins/line-numbers/prism-line-numbers.css');

// TODO: bug - need to refresh the page
Object.defineProperty(window, '__nofwl_theme__', {
  set: function(value) {
    if (value === 'light') {
      // theme: light
      require('prismjs/themes/prism-solarizedlight.css');
    } else {
      // theme: dark
      require('prismjs/themes/prism-tomorrow.css');
    }
  },
});
// require('prismjs/themes/prism-solarizedlight.css');
// require('prismjs/themes/prism-okaidia.css');
// require('prismjs/themes/prism-twilight.css');
// require('prismjs/plugins/command-line/prism-command-line.css');
// import 'prismjs/themes/prism.css';
