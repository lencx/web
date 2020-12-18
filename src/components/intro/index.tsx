/**
 * @author: lencx
 * @create_at: Dec 18, 2020
 */

import React, { FC } from 'react';

import './intro.scss';

export interface IntroProps {
  name: string;
  avatar: string;
  link: string;
  desc: string;
}

const Intro: FC<IntroProps> = ({ link, avatar, name, desc }) => {
  return (
    <div className="intro_card">
      <a className="intro_body" href={link}>
        <img alt="avatar" className="avatar" src={avatar} />
        <div className="info">
          <h4 className="name">{name}</h4>
          <div className="desc">{desc}</div>
        </div>
      </a>
    </div>
  );
};

export default Intro;
