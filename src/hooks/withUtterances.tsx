/**
 * @author: lencx
 * @create_at: Mar 25, 2020
 */

import React, { useEffect } from 'react';

export interface WithUtterancesArgs {
  repo: string;
  container: string;
  term?: string;
  theme?: string;
}

const withUtterances = (fnArgs: WithUtterancesArgs) => (
  WrappedComponent: React.ComponentType<any>
) => (props: any) => {
  const _theme = `github-${fnArgs.theme ||
    (typeof window !== 'undefined' && window.localStorage.theme)}`;

  useEffect(() => {
    if (fnArgs) {
      const el = document.querySelector(fnArgs.container);
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.async = true;
      script.setAttribute('repo', fnArgs.repo);
      script.setAttribute('theme', _theme || 'dark');
      script.setAttribute('issue-term', fnArgs.term || 'pathname');
      script.setAttribute('crossorigin', 'anonymous');
      if (el) {
        el.appendChild(script);
      }
    }
  }, []);
  return <WrappedComponent {...props} />;
};

export default withUtterances;
