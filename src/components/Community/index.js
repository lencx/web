import React from 'react';
import Button from '../Button';
import GithubIcon from './icons/github.png';
import TwitterIcon from './icons/twitter.png';
// import FacebookIcon from './icons/facebook.png';

import './index.scss';

const IconBtn = ({ className, link, icon }) => (
  <a href={link} target="__blank">
    <Button className={`community-icons icon-${className}`}>
      <img src={icon} alt={className} />
    </Button>
  </a>
)

export default () => {
  return (
    <div className="community">
      <IconBtn link="https://github.com/lencx" className="github" icon={GithubIcon} />
      <IconBtn link="https://twitter.com/no_fwl" className="twitter" icon={TwitterIcon} />
      {/* <IconBtn link="" className="facebook" icon={FacebookIcon} /> */}
    </div>
  )
}
