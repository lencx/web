/**
 * @author: lencx
 * @create_at: Jan 25, 2020
 */

import React from 'react';
import Layout from '~layout/post';
import SEO from '~common/seo';

import styles from './about.mod.scss';

const BASE_API_URL = 'https://lencx-stats.vercel.app/api';
const GITHUB_URL = 'https://www.github.com/lencx';

interface LinkItem {
  name?: string;
  link?: string;
  desc?: string;
}

interface ProjectCardProps {
  to?: string;
  type?: 'pins' | 'stats' | 'langs';
  repo?: string;
  alt?: string;
}

export function LinkItems({
  dataSource,
  linkKey = 'name',
}: {
  linkKey?: 'name' | 'desc';
  dataSource: LinkItem[];
}) {
  return (
    <div className={styles.list}>
      {dataSource.map((item: any, idx) => {
        const renderTxt = (val: any = '') => {
          if (!val) return null;
          return linkKey === val ? (
            <a href={item.link}>{item[val]}</a>
          ) : (
            <span>{item[val]}</span>
          );
        };
        return (
          <p className={styles.proj_item} key={`${item.name}-${idx}`}>
            {renderTxt('name')}
            {': '}
            <span>{renderTxt('desc')}</span>
          </p>
        );
      })}
    </div>
  );
}

export function ProjectCard(props: ProjectCardProps) {
  let url;
  switch (props.type) {
    case 'langs':
      url = `${BASE_API_URL}/top-langs/?username=lencx&layout=compact&theme=calm`;
      break;
    case 'stats':
      url = `${BASE_API_URL}/?username=lencx&show_icons=true&bg_color=320,323031,84a59d&icon_color=b0c4b1&title_color=eec170&text_color=a2a392&include_all_commits=true&border=none`;
      break;
    default:
      url = `${BASE_API_URL}/pin/?username=lencx&theme=calm&repo=${props.repo}`;
  }
  return (
    <a className={styles.proj_card} href={props.to}>
      <img src={url} alt={props.alt || props.type || props.repo} />
    </a>
  );
}

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <h3>About Me</h3>
      <code>
        &nbsp;Life’s attitude to you depends on your attitude to it.&nbsp;
      </code>
      <LinkItems
        linkKey="desc"
        dataSource={[
          {
            name: 'github',
            desc: 'lencx',
            link: 'https://github.com/lencx/nofwl',
          },
          {
            name: 'email',
            desc: 'cxin1314@gmail.com',
            link: 'mailto:cxin1314@gmail.com?subject=NoFWL',
          },
        ]}
      />

      <ProjectCard to={GITHUB_URL} type="stats" />

      <div className={styles.friends}>
        <h4>我的友链信息👇</h4>
        <p>
          博客名称: <b>lencx的博客</b>
        </p>
        <p>
          博客链接: <b>https://nofwl.com</b>
        </p>
        <p>
          博客头像: <b>https://static.nofwl.com/lencx.png</b>
        </p>
        <p>
          博客描述: <b>{`{折腾 ⇌ 迷茫 ⇌ 思考]ing，在路上...`}</b>
        </p>
      </div>
      {/* <br />
      <ProjectCard url={`${GITHUB_URL}/deno-example`} repo="deno-example" />
      <ProjectCard url={`${GITHUB_URL}/nofwl`} repo="nofwl" />
      <ProjectCard url={`${GITHUB_URL}/deno-getfiles`} repo="deno-getfiles" />
      <ProjectCard url={`https://music.nofwl.com`} repo="music" /> */}
    </Layout>
  );
}
