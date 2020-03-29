---
title: WeChat And AliPay FAQ
date: 2020-03-30
type: technology
category: FAQ
spoiler: 微信，支付宝开发常见问题汇总。微信openid获取，授权，支付等...
tags:
# readtime:
---

## 微信

### [网页授权](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)

[1] 用户同意授权，获取code <br/>
[2] 通过code换取网页授权access_token <br/>
[3] 拉取用户信息(需scope为 snsapi_userinfo) <br/>

* 将`MP_verify_*.txt`文件放在网站后台的根目录中
* 授权链接：`https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`
  > 参数说明：[*必需 ] [?非必须]
  * `appid`*: 公众号的唯一标识
  * `redirect_uri`*: 授权后重定向的回调链接地址， 请使用 urlEncode 对链接进行处理
  * `response_type`*: 返回类型，请填写code
  * `scope`*: 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且， 即使在未关注的情况下，只要用户授权，也能获取其信息 ）
  * `state`?: 重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
  * `#wechat_redirect`*:	无论直接打开还是做页面302重定向时候，必须带此参数

### [H5支付](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6)

```js
// wechatPay.js
export async function onBridgeReady(conf, getSign, callback) {
  const config = {
    appId: 'wx8888888888888888', //公众号名称，由商户传入
    timeStamp: '1414561699', //时间戳，自1970年以来的秒数
    nonceStr: 'e61463f8efa94090b1f366cccfbbb444', //随机串
    // package: 'prepay_id=u802345jgfjsdfgsdg888',
    signType: 'HMAC-SHA256', //微信签名方式
    // paySign: '', //微信签名
    ...conf,
  };

  const _conf = {
    appId: config.appId,
    timeStamp: config.timeStamp,
    nonceStr: config.nonceStr,
    packageStr: config.package,
    signType: config.signType,
  };

  // 通过后端API获取微信签名
  const sig = await getSign(_conf);

  // eslint-disable-next-line no-undef
  WeixinJSBridge.invoke(
    'getBrandWCPayRequest',
    {
      ...config,
      paySign: sig, //微信签名
    },
    function(res) {
      if (res.err_msg === 'get_brand_wcpay_request:ok') {
        // 使用以上方式判断前端返回,微信团队郑重提示：
        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
        // alert('wechatPay: success');
        typeof callback === 'function' && callback();
      }
    },
  );
}

export function wechatPay(config, getSig, callback) {
  const _onBridgeReady = () => onBridgeReady(config, getSig, callback);
  if (typeof WeixinJSBridge == 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', _onBridgeReady, false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', _onBridgeReady);
      document.attachEvent('onWeixinJSBridgeReady', _onBridgeReady);
    }
  } else {
    _onBridgeReady();
  }
}

export function randomStr(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
```

```js
// 使用wechatPay.js
import { wechatPay, randomStr } from '@utils/wechatPay';

const respData = { // 接口返回
  prepayId: 'xxxxxxxxxxxxxx', // 后端返回prepayId
}

// other code ...
wechatPay(
  {
    // config
    timeStamp: Date.now().toString(),
    nonceStr: randomStr(24),
    package: `prepay_id=${respData.prepayId}`,
  },
  // get paySign
  async params => {
    const result = await weChatPaySign(params); // 获取微信签名
    return result.data; // return 签名字符串
  },
  () => {
    // success callback
  },
);
```

## 支付宝支付

### [手机网站支付接口](https://opendocs.alipay.com/open/60/104790)

```js
// 后端返回支付宝页面，前端进行跳转
const aliPayPage = 'http://商户自定义地址/alipay/return_url.php?body=......&sign_type=RSA';

const newWindow = window.open('', '_self');
newWindow.document.write(aliPayPage);
newWindow.focus();
```