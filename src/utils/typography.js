import Typography from "typography"
import CodePlugin from "typography-plugin-code"
import {
  space,
  fontSizes,
  colors,
  transition,
  radii,
  breakpoints,
  lineHeights,
  letterSpacings,
  fonts,
  shadows,
} from "./tokens"
import codeLangs from './tokens/code-langs';

// console.log('code', ...codeLangs);

const _options = {
  bodyFontFamily: fonts.system,
  headerFontFamily: fonts.header,
  monospaceFontFamily: fonts.monospace.join(`,`),
  systemFontFamily: fonts.system,
  baseLineHeight: lineHeights.default,
  headerLineHeight: lineHeights.dense,
  headerColor: colors.gray.dark,
  bodyColor: colors.gray.copy,
  plugins: [new CodePlugin()],
  overrideStyles: ({ rhythm }) => {
    return {
      a: {
        textDecoration: `none`,
      },
      "h1, h2, h3, h4, h5, h6": {
        letterSpacing: letterSpacings.tight,
      },
      h1: { color: `#000` },
      h2: {
        marginTop: rhythm(space[9]),
      },
      h3: {
        marginTop: rhythm(space[9]),
      },
      blockquote: {
        paddingLeft: rhythm(space[6]),
        marginLeft: 0,
        borderLeft: `${rhythm(space[1])} solid ${colors.ui.light}`,
      },
      hr: {
        backgroundColor: colors.ui.light,
      },
      iframe: {
        border: 0,
      },
      "tt, code, kbd, samp": {
        // reset line-height set by
        // https://github.com/KyleAMathews/typography.js/blob/3c99e905414d19cda124a7baabeb7a99295fec79/packages/typography/src/utils/createStyles.js#L198
        lineHeight: `inherit`,
      },
      "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code": {
        fontWeight: `normal`,
        fontSize: `82.5%`,
      },
      "tt, code, kbd": {
        background: colors.code.bgInline,
        paddingTop: `0.2em`,
        paddingBottom: `0.2em`,
      },
      "tt, code, kbd, .gatsby-code-title": {
        fontFamily: fonts.monospace.join(`,`),
        fontSize: `90%`,
        // Disable ligatures as they look funny as code.
        fontVariant: `none`,
        WebkitFontFeatureSettings: `"clig" 0, "calt" 0`,
        fontFeatureSettings: `"clig" 0, "calt" 0`,
      },

      // gatsby-remark-prismjs styles
      ".gatsby-highlight": {
        padding: `${rhythm(space[6])} ${rhythm(space[2])} ${rhythm(space[3])}`,
        // [raised, floating, overlay, dialog]
        boxShadow: shadows.raised,
        // background: colors.code.bg,
        // borderRadius: `${radii[1]}px`,
        // position: `relative`,
        // WebkitOverflowScrolling: `touch`,
      },
      ".gatsby-highlight pre[class*='language-']::before": {
        borderRadius: `0 0 ${radii[2]}px ${radii[2]}px`,
        fontSize: fontSizes[0],
        fontFamily: fonts.monospace.join(`,`),
        letterSpacing: letterSpacings.tracked,
        lineHeight: lineHeights.solid,
        padding: `${rhythm(space[1])} ${rhythm(space[2])}`,
        top: rhythm(-space[6]),
        marginRight: rhythm(-space[3]),
        color: colors.gray.dark,
        background: `#ddd`,
        //// position: `absolute`,
        //// textAlign: `right`,
        //// textTransform: `uppercase`,
      },
      ".gatsby-highlight pre code": {
        // reset code vertical padding declared earlier
        paddingRight: rhythm(space[4]),
        //   // display: `block`,
        //   // fontSize: `100%`,
        //   // lineHeight: 1.5,
        //   // float: `left`,
        //   // minWidth: `100%`,
      },
      ".gatsby-highlight-code-line": {
        paddingRight: rhythm(space[6]),
        paddingLeft: rhythm(space[5]),
        borderLeft: `${rhythm(space[1])} solid`,
        //// background: colors.code.border,
        //// borderLeft: `${rhythm(space[1])} solid ${
        ////   colors.code.lineHighlightBorder
        //// }`,
        //// display: `block`,
        // marginRight: `${rhythm(-space[6])}`,
        // marginLeft: `${rhythm(-space[6])}`,
      },
      ".gatsby-highlight pre::-webkit-scrollbar": {
        width: rhythm(space[2]),
        height: rhythm(space[2]),
      },
      // ".gatsby-highlight pre::-webkit-scrollbar-thumb": {
      //   // background: colors.code.scrollbarThumb,
      // },
      ".gatsby-highlight pre::-webkit-scrollbar-track": {
        borderRadius: `0 0 ${radii[2]}px ${radii[2]}px`,
        //// background: colors.code.border,
      },
      // Target image captions.
      // This is kind of a fragile selector...
      ".gatsby-resp-image-link + em, .gatsby-resp-image-wrapper + em": {
        fontSize: fontSizes[1],
        lineHeight: lineHeights.dense,
        paddingTop: rhythm(3 / 8),
        marginBottom: rhythm(space[9]),
        color: colors.gray.calm,
        // // display: `block`,
        // // fontStyle: `normal`,
        // // position: `relative`,
      },
      ".main-body a": {
        transition: `all ${transition.speed.fast} ${transition.curve.default}`,
        //// color: colors.lilac,
        //// textDecoration: `none`,
        //// borderBottom: `1px solid ${colors.lilac}`,
      },
      ".post-body figcaption": {
        color: colors.gray.calm,
        marginTop: rhythm(space[1]),
        marginBottom: rhythm(space[3]),
        //// fontSize: `87.5%`,
      },
      ".main-body a.gatsby-resp-image-link": {
        marginTop: rhythm(space[9]),
        marginBottom: rhythm(space[9]),
        //// borderBottom: `transparent`,
      },
      ".main-body figure a.gatsby-resp-image-link": {
        marginTop: rhythm(space[9]),
        //// borderBottom: `transparent`,
        //// marginBottom: 0,
      },
      // ".gatsby-highlight pre[class*='language-']": {
      //   // backgroundColor: `transparent`,
      //   // border: 0,
      //   // WebkitOverflowScrolling: `touch`,
      //   // color: colors.white,
      // },
      // ".gatsby-resp-image-link + em a, .gatsby-resp-image-wrapper + em a": {
      //   // fontWeight: `normal`,
      //   // color: colors.lilac,
      // },
      // ".main-body a:hover": {
      //   // borderBottomColor: colors.ui.bright,
      // },
      // ".post-body figure img": {
      //   marginBottom: 0,
      // },
      // ".main-body a.anchor": {
      //   color: `inherit`,
      //   fill: colors.lilac,
      //   textDecoration: `none`,
      //   borderBottom: `none`,
      // },
      // ".main-body a.anchor:hover": {
      //   background: `none`,
      // },
      // ".gatsby-highlight, .gatsby-code-title, .post-body .gatsby-resp-image-link": {
      //   marginLeft: rhythm(-space[6]),
      //   marginRight: rhythm(-space[6]),
      // },
      ".gatsby-resp-image-link": {
        borderRadius: `${radii[1]}px`,
        //// overflow: `hidden`,
      },
      // gatsby-remark-code-titles styles
      // https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
      ".gatsby-code-title": {
        padding: `${rhythm(space[6])} ${rhythm(space[6])} ${rhythm(space[3])}`,
        //// background: colors.code.bg,
        //// borderBottom: `1px solid ${colors.code.border}`,
        //// color: colors.code.text,
        //// fontSize: `74%`,
      },
      "@media (max-width:634px)": {
        ".gatsby-highlight, .gatsby-code-title, .gatsby-resp-image-link": {
          borderRadius: 0,
          borderLeft: 0,
          borderRight: 0,
        },
      },
      [`${breakpoints.md} and (max-width:980px)`]: {
        ".gatsby-highlight, .gatsby-code-title": {
          marginLeft: 0,
          marginRight: 0,
        },
      },
      video: {
        width: `100%`,
        marginBottom: rhythm(space[6]),
      },
      ".twitter-tweet-rendered": {
        margin: `${rhythm(space[9])} auto !important`,
      },
      ".egghead-video": {
        border: `none`,
      },
      [breakpoints.lg]: {
        ".gatsby-highlight, .post-body .gatsby-resp-image-link, .gatsby-code-title": {
          marginLeft: rhythm(-space[7]),
          marginRight: rhythm(-space[7]),
        },
        ".gatsby-highlight pre": {
          padding: `${rhythm(space[7])} 0`,
          marginBottom: rhythm(space[7]),
        },
        ".gatsby-highlight-code-line": {
          paddingRight: rhythm(space[7]),
          paddingLeft: rhythm(space[6]),
          borderLeftWidth: rhythm(space[2]),
          // marginRight: rhythm(-space[7]),
          // marginLeft: rhythm(-space[7]),
        },
        ".gatsby-code-title": {
          padding: `${rhythm(space[6])} ${rhythm(space[7])} ${rhythm(
            space[3]
          )}`,
          // marginRight: rhythm(-space[7]),
          // marginLeft: rhythm(-space[7]),
        },
        ".gatsby-highlight pre[class*='language-']::before": {
          right: rhythm(space[7]),
        },
        // ".gatsby-highlight pre code": {
        //   padding: `0 ${rhythm(space[7])}`,
        // },
      },
      [breakpoints.xxl]: {
        html: {
          fontSize: `${(18 / 16) * 100}%`,
        },
      },

      ...codeLangs,
      // PrismJS syntax highlighting token styles
      // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/
      // ".token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata": {
      //   color: colors.code.comment,
      // },
      // ".token.parameter": {
      //   color: colors.code.parameter,
      // },
      // ".token.punctuation": {
      //   color: colors.code.punctuation,
      // },
      // ".token.property, .token.tag, .token.boolean, .token.number, .token.function-name, .token.constant, .token.symbol": {
      //   color: colors.code.tag,
      // },
      // ".token.selector, .token.attr-name, .token.string, .token.char, .token.function, .token.builtin": {
      //   color: colors.code.selector,
      // },
      // ".token.operator, .token.entity, .token.url, .token.variable": {
      //   color: colors.code.operator,
      // },
      // ".token.atrule, .token.attr-value, .token.keyword, .token.class-name": {
      //   color: colors.code.keyword,
      //   // fontWeight: `bold`,
      // },
      // ".token.inserted": {
      //   color: colors.code.add,
      // },
      // ".token.deleted": {
      //   color: colors.code.remove,
      // },
      // ".token.regex, .token.important": {
      //   color: colors.code.regex,
      // },
      // ".language-css .token.string, .style .token.string": {
      //   color: colors.code.cssString,
      // },
      // ".token.important": {
      //   fontWeight: `normal`,
      // },
      // ".token.bold": {
      //   fontWeight: `bold`,
      // },
      // ".token.italic": {
      //   fontStyle: `italic`,
      // },
      // ".token.entity": {
      //   cursor: `help`,
      // },
      // ".namespace": {
      //   opacity: 0.7,
      // },
      // PrismJS plugin styles
      // ".token.tab:not(:empty):before, .token.cr:before, .token.lf:before": {
      //   color: colors.code.invisibles,
      // },
      // Fancy external links in posts, borrowed from
      // https://github.com/comfusion/after-dark/
      // @see https://github.com/comfusion/after-dark/blob/8fdbe2f480ac40315cf0e01cece785d2b5c4b0c3/layouts/partials/critical-theme.css#L36-L39
      // ".gatsby-resp-image-link + em a[href*='//']:after": {
      //   content: `" " url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20class='i-external'%20viewBox='0%200%2032%2032'%20width='14'%20height='14'%20fill='none'%20stroke='%23744C9E'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='9.38%'%3E%3Cpath%20d='M14%209%20L3%209%203%2029%2023%2029%2023%2018%20M18%204%20L28%204%2028%2014%20M28%204%20L14%2018'/%3E%3C/svg%3E")`,
      // },
    }
  },
}

const typography = new Typography(_options)

export const { scale, rhythm, options } = typography;
export default typography;
