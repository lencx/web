import gray from "gray-percentage"

export default {
  // original palette by @SachaG
  // @see https://www.figma.com/file/J6IYJEtdRmwJQOrcZ2DfvxDD/Gatsby
  gatsby: `#663399`, // was #744c9e
  gatsbyDark: `#442266`,
  gatsbyDarker: `#221133`,
  lemon: `#ffdf37`,
  mint: `#73fff7`,
  lilac: `#8c65b3`,
  lavender: `#b190d5`,
  wisteria: `#ccb2e5`,
  // accent color from the "bolder palette" by @ArchieHicklin
  // @see https://github.com/gatsbyjs/gatsby/issues/1173#issuecomment-309415650
  accent: `#ffb238`, // "Mustard",
  success: `#37b635`,
  warning: `#ec1818`,
  accentLight: `#ffeccd`,
  accentDark: `#9e6100`,
  skyLight: `#dcfffd`,
  skyDark: `#0a75c2`,
  ui: {
    bright: `#F1DEFA`,
    light: `#F6EDFA`,
    whisper: `#FCFAFF`,
  },
  gray: {
    dark: gray(8, 270),
    copy: gray(16, 270),
    lightCopy: gray(35, 270),
    calm: gray(46, 270),
    bright: gray(64, 270),
    light: gray(80, 270),
    superLight: gray(96, 270),
    whisper: gray(98, 270),
    border: gray(93, 270),
  },
  white: `#ffffff`,
  code: {
    bgInline: `#fbf2e9`,
    // bg: `#fdfaf6`,
    bg: `#fdf6e3`,
    border: `#faede5`,
    text: `#866c5b`,
    remove: `#e45c5c`,
    add: `#4a9c59`,
    selector: `#b3568b`,
    tag: `#4084a1`,
    keyword: `#538eb6`,
    comment: `#6f8f39`,
    punctuation: `#53450e`,
    regex: `#d88489`,
    cssString: `#a2466c`,
    invisibles: `#e0d7d1`,
    scrollbarThumb: `#f4d1c6`,
    lineHighlightBorder: `#f1beb6`,
  },
  codeLangColor: {
    c: '#555555',
    css: '#FF9800', // #563D7C
    diff: '#E6FFED',
    flow: '#E8BD36',
    graphql: '#E10098',
    go: '#00ADD8',
    html: '#E34C26',
    js: '#F7DF1E', // #F1E05A
    json: 'linen',
    java: '#B07219',
    jsx: '#61DAFB',
    ts: '#2B7489',
    rust: '#DEA584',
    sass: '#C6538C',
    sh: '#89E051',
    yml: '#FFA8DF',
  }
}
