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
    langs: ['typescript', 'ts'],
    txt: 'TS',
    bg: codeLangColor.ts,
    color: colors.white,
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
    txt: 'yaml',
    bg: codeLangColor.css,
  },
  {
    langs: ['md', 'markdown'],
    txt: 'md',
  },
  {
    langs: ['mdx'],
    txt: 'mdx',
  },
  {
    langs: ['json'],
    txt: 'JSON',
    bg: codeLangColor.json,
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
  },
  {
    langs: ['diff'],
    bg: codeLangColor.diff,
  },
  {
    langs: ['flow'],
    bg: codeLangColor.flow,
  },
];

const genCodeLanguage = (languages) => {
  let codeLangs = {}
  languages.map(({ langs, txt, bg, ...rest }) => {
    if (Array.isArray(langs)) {
      langs.map(_lang => {
        const langKey = `.gatsby-highlight pre[class*='language-${_lang}']::before`;
        codeLangs[langKey] = {
          content: txt ? `'${txt}'` : `'${_lang}'`,
          ...rest,
        }
        if (bg) {
          codeLangs[langKey].background = `${bg} !important`;
        }
        return codeLangs;
      });
    }
    return codeLangs;
  });
  return codeLangs;
}

export default genCodeLanguage(preCodeLanguages);
