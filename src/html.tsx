/**
 * @author: lencx
 * @create_at: Jan 25, 2020
 */

import React from 'react';

export interface HTMLProps {
  body: string;
  htmlAttributes?: React.HTMLAttributes<HTMLElement>;
  bodyAttributes?: React.HTMLAttributes<HTMLElement>;
  headComponents?: React.ReactNode;
  preBodyComponents?: Array<React.ReactNode>;
  postBodyComponents?: Array<React.ReactNode>;
}

export default function HTML(props: HTMLProps) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
