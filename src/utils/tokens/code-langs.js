import colors from "./colors";

const { codeLangColor } = colors;

const preCodeLanguages = [
  {
    langs: ['c'],
    txt: 'C',
    background: codeLangColor.c,
    color: colors.white,
  },
  {
    langs: ['javascript', 'js'],
    txt: 'JS',
    bg: codeLangColor.js,
    // bg: '#F7DF1E',
  },
  {
    langs: ['html'],
    txt: 'HTML',
    bg: codeLangColor.html,
    // bg: '#005A9C',
  },
  {
    langs: ['jsx'],
    txt: 'JSX',
    bg: codeLangColor.jsx,
  },
  {
    langs: ['graphql'],
    txt: 'GraphQL',
    bg: codeLangColor.graphql,
    color: colors.white,
    fontWeight: `400`,
  },
  {
    langs: ['css'],
    txt: 'CSS',
    bg: codeLangColor.css,
    color: colors.white,
    fontWeight: `400`,
  },
  {
    langs: ['shell', 'sh', 'bash'],
    bg: codeLangColor.sh,
    color: colors.white,
  },
  {
    langs: ['yaml', 'yml'],
    txt: 'YAML',
  },
  {
    langs: ['md', 'markdown'],
    txt: 'MarkDown',
  },
  {
    langs: ['mdx'],
    txt: 'MDX',
  },
  {
    langs: ['json'],
    txt: 'JSON',
  },
  {
    langs: ['rust'],
    txt: 'Rust',
    background: '#DEA584',
    color: colors.white,
  },
  {
    langs: ['txt', 'text'],
    txt: 'Text',
    background: colors.white,
  }
];

const genCodeLanguage = (languages) => {
  let codeLangs = {}
  languages.map(({ langs, txt, bg, ...rest }) => {
    if (Array.isArray(langs)) {
      langs.map(_lang => {
        const langKey = `.gatsby-highlight pre[class='nl_language-${_lang}']::before`;
        codeLangs[langKey] = {
          content: txt ? `'${txt}'` : `'${_lang}'`,
          ...rest,
        }
        if (bg) {
          codeLangs[langKey].background = bg;
        }
        return codeLangs;
      });
    }
    return codeLangs;
  });
  return codeLangs;
}

export default genCodeLanguage(preCodeLanguages);
