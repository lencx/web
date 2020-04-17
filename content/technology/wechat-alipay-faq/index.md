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

### [微信分享](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)

#### Step

* `Step1`: 绑定域名
  - 先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
  - 备注：登录后可在“开发者中心”查看对应的接口权限。
* `Step2`: 引入JS文件
  - 在需要调用JS接口的页面引入如下JS文件，（支持https）：http://res.wx.qq.com/open/js/jweixin-1.6.0.js
  - 如需进一步提升服务稳定性，当上述资源不可访问时，可改访问：http://res2.wx.qq.com/open/js/jweixin-1.6.0.js （支持https）。
* `Step3`: 通过config接口注入权限验证配置
* `Step4`: 通过ready接口处理成功验证
* `Step5`: 通过error接口处理失败验证

#### Method

```js
// wechatShare.js
import { wxSignature } from '@services/global'; // 后端权限签名算法

// url: 当前网页的URL，不包含#及其后面部分
export async function wechatShareSign(url = window.location.href.split('#')[0]) {
  const data = await wxSignature(url); // 返回{timestamp: '', nonceStr: '', signature: ''}

  const shareConfig = {
    // 开启调试模式,调用的所有api的返回值会在客户端alert出来，
    // 若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    debug: true,
    appId: '', // 公众号appID
    // 签名用的noncestr和timestamp必须与wx.config中的nonceStr和timestamp相同。
    timestamp: data.timestamp, // 必填，生成签名的时间戳 (后端返回)
    nonceStr: data.nonceStr, // 必填，生成签名的随机串 (后端返回)
    signature: data.signature, // 必填，签名 (后端返回)
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
  };

  wx.config(shareConfig);
}

export default function wechatShare({
  title = '',
  desc = '',
  link = window.location.href,
  imgUrl = '',
  onSuccess,
}) {
  wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
    // “分享给朋友”及“分享到QQ”
    wx.updateAppMessageShareData({
      title, // 分享标题
      desc, // 分享描述
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function () {
        // 设置成功
        onSuccess && onSuccess();
      }
    });
    // “分享到朋友圈”及“分享到QQ空间”
    wx.updateTimelineShareData({
      title, // 分享标题
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function () {
        // 设置成功
        onSuccess && onSuccess();
      }
    });
  });
}
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