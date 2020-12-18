/**
 * @author: lencx
 * @create_at: Jan 25, 2020
 */

import React from 'react';
import Layout from '~layout/post';
import SEO from '~common/seo';
import Intro from '~comps/intro';

export default function Friends() {
  return (
    <Layout>
      <SEO title="About" />

      <h3>👭 友情链接</h3>
      <Intro
        name="ScarSu的博客"
        link="https://www.scarsu.com"
        avatar="https://scarsu.oss-cn-shanghai.aliyuncs.com/picgo20201012144739.jpg"
        desc="一个程序媛关于【自律/读书认知/Web前端技术】的一些个人分享"
      />
      <Intro
        name="Daniel的博客"
        link="https://wangxitong.github.io"
        avatar="https://wangxitong.github.io/img/avatar.jpeg"
        desc="溺死在前端的浑水里。。。"
      />
    </Layout>
  );
}
