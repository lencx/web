---
title: Learning Taro
date: 2020-03-24
type: technology
category: js
spoiler: 多端统一开发框架，支持用 React 的开发方式编写一次代码，生成能运行在微信/百度/字节跳动/支付宝/QQ小程序、快应用、H5、React Native 等平台的应用。
tags: [react, js, taro]
# readtime:
---

## [开始Taro](https://nervjs.github.io/taro)

### 安装

```bash
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

### 初始化

```bash
taro init <project_name>

# or npm version 5.2+
npx @tarojs/cli init <project_name>
```

### 启动及构建(多端)

```bash
# dev: 开发环境
# build: 生产环境

# H5
yarn [dev|build]:h5

# 微信小程序
yarn [dev|build]:weapp

# 百度小程序
yarn [dev|build]:swan

# 支付宝小程序
yarn [dev|build]:alipay

# 字节跳动小程序
yarn [dev|build]:tt

# 京东小程序
yarn [dev|build]:jd

# QQ小程序
yarn [dev|build]:qq

# 快应用
yarn [dev|build]:quickapp

# React Native
yarn [dev|build]:rn
```

## [数据流方案(dvaJS)](https://dvajs.com)

### 目录结构

```bash
root
|- src
|   |- models
|   |   |- index.js # 集合项目里的model关系
|   |   |- global.js # 子model
|   |   |- ... # 其他model
|   |- app.jsx
|   |- dva.js
|   |- ...
|- ...
```

### Step

#### Step1

> 安装npm包

```bash
# redux
yarn add redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger

# dva
yarn add dva-core dva-loading redux-logger
```

#### Step2

> 创建`src/dva.js`

```js
import { create } from "dva-core";
import { createLogger } from "redux-logger";
import  createLoading  from "dva-loading";

let app;
let store;
let dispatch;
let registered;

function createApp(opt) {
  // redux 的日志
  opt.onAction = [createLogger()]
  app = create(opt)
  app.use(createLoading({}))

  if (!registered) {
    opt.models.forEach(model => app.model(model));
  }
  registered = true;
  app.start()

  store = app._store;
  app.getStore = () => store;
  app.use({
    onError(err){
      console.log(err);
    }
  })

  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

export default{
  createApp,
  getDispatch(){
    return app.dispatch
  }
}
```

#### Step3

> 创建`src/models`文件夹

```js
// src/models/index.js
import global from './global';

export default [
  global,
  // other child models
];
```

```js
// src/models/global.js
export default {
  namespace: 'global',
  state: {
    name: 'myApp',
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {},
}
```

#### Step4

> 在`src/app.jsx`中引入dva和models

```jsx
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';

import dva from './dva';
import models from './models';

const dvaApp = dva.createApp({
  initialState:{},
  models,
})

const store = dvaApp.getStore();

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    pages: [
      'pages/index/index',
      // other page
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return <Provider store={store} />
  }
}

Taro.render(<App />, document.getElementById('app'))
```

## 路径别名

```js
// config/index.js
{
  // ...
  alias: {
    '@utils': 'src/utils',
    '@comps': 'src/components',
    // other...
  },
}
```

## 路由(Router)

### 页面路由

```jsx
// src/app.jsx
config = {
  pages: [
    'pages/index/index',
    'pages/about/index',
    // ...
  ],
}
```

### 自定义路由

```js
// config/index.js
{
  // ...
  h5: {
    // ...
    router: {
      mode: 'browser', // 'hash | browser'
      customRoutes: {
        '/pages/index/index': '/',
        '/pages/about/index': '/about',
        // 其他路由
      },
    },
  }
}
```

## 配置

### 多端同时开发

```js
// config/index.js
{
  // ...
  outputRoot: `dist/${process.env.TARO_ENV}`,
  alias: {
    // 路径别名
    '@utils': 'src/utils',
    // other
  }
}
```

## 常用工具方法

```js
/**
* checkEnv
* @param {string} - weapp | h5 | swan | alipay | tt | jd | qq | rn | quickapp
* @param {function} - callback
* @example checkEnv('weapp', () => {})
*/
export const checkEnv = (env, cb) => {
  if (process.env.TARO_ENV === env) {
    if (typeof cb === 'function') {
      cb(env);
    }
  }
};

// get storage
export const getStore = (key, cb) => {
  try {
    const data = Taro.getStorageSync(key);
    if (data) {
      cb && cb(data);
      return data;
      // Do something with return value
    }
  } catch (e) {
    console.error(e)
    // Do something when catch error
  }
}
```

## 多端兼容问题

* [微信小程序: 组件外部传入className不生效](https://github.com/NervJS/taro/issues/5084)
* [图片默认小于10KB，可更改配置](https://nervjs.github.io/taro/docs/static-reference.html)
* 图片资源使用相对路径(使用alias在微信小程序中会有问题)
* ...

## 微信开发者工具 - charles代理(域名代理到本机的开发环境)

* Charles: `Tools` => `Map Remote` => `Add` (From: https://www.example.com --> To: http://localhost:10086)
* 微信开发者工具: `设置` => `代理设置` => `手动设置代理` `localhost:8888`(charles默认端口号)
* Charles默认端口号: `Charles` => `Proxy` => `Proxy Settings...`
---

[更新中...]