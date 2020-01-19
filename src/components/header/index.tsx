import React from 'react';

interface HeaderProps {
  siteTitle: string;
}

export default function Header(props: HeaderProps) {
  return <span>{props.siteTitle}</span>;
}
