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
  label?: string;
}

const withUtterances = (fnArgs: WithUtterancesArgs) => (
  WrappedComponent: React.ComponentType<any>
) => (props: any) => {
  let _theme;

  useEffect(() => {
    _theme = `github-${(window as any).__theme || 'dark'}`;
    if (fnArgs) {
      const el = document.querySelector(fnArgs.container);
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.async = true;
      script.setAttribute('repo', fnArgs.repo);
      script.setAttribute('theme', fnArgs.theme || _theme);
      script.setAttribute('issue-term', fnArgs.term || 'pathname');
      script.setAttribute('crossorigin', 'anonymous');
      script.setAttribute('label', fnArgs.label || '💬');
      if (el) {
        el.appendChild(script);
      }
    }
  }, []);
  return <WrappedComponent {...props} />;
};

export default withUtterances;
