# vue-social-captcha

> 一个集极验验证、腾讯验证的vue组件

## 截图
<img src="https://raw.githubusercontent.com/QQOQ/vue-social-captcha/master/examples/assets/demo.gif" alt="vue-contribution" width="750">

## 依赖
- [axios](https://github.com/axios/axios)

## 安装

``` bash
$ npm install vue-social-captcha -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import captcha from 'vue-social-captcha'
Vue.use(captcha)
```

在项目中使用 vue-social-captcha

```js
<template>
    <div id="app">
        <Captcha
            id="Captcha"
            scene="Login"
            type="Geetest"
            :parm="captchaOption"
            @callback="captchaNotice"
            url="http://pay.test.com/admin/captcha/"
        >
            <input id="Captcha" type="button" value="登陆"/>
        </Captcha>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            captchaOption: {
                // 各平台的参数，具体请参阅个平台文档
                // 以下为腾讯验证码的参数
                // appid: '',
                // 以下为极验验证码的参数
                product: 'bind',
            }
        }
    },
    methods: {
        // 回调监听
        // status: 1成功,2验证中,0失败
        // res: 三方返回的原始数据
        captchaNotice(status, res){
            console.log(status)
            console.log(res)
        }
    }
}
</script>
```

## props属性
通过以下属性来设置你的验证码

| 属性  | 说明  | 类型  | 默认值  | 必须  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| parm  | 验证码参数（请参阅各平台文档）  | Object  | 无  | 是  |
| url  | 后端验证地址，返回格式请参阅下面的【数据返回格式】  | String  | 无  | 是  |
| type  | 验证码类型，可选参数 `TencentCaptcha` `Geetest` | String  | 无  | 是 |
| id  | 绑定元素id  | String  | 无  | 是  |
| scene  | 使用场景，会传递给后端，主要用于后端业务逻辑  | String  | 无  | 是  |

## 服务端Url请求

#### 请求
url请求时会附带以下两个参数到服务端，以便于业务逻辑开发。
```js
{
    g_type: 'TencentCaptcha',
    g_scene: 'Login',
}
```

#### 数据返回格式
服务端返回参数主要有三个，分别是`code` `msg` `data`。

| 属性 | 说明 | 必须 |
| ------------ | ------------ | ------------ |
| code | 验证码状态，有2个值，1为成功，0为失败 | 必须 |
| msg | 说明文本 | 否 |
| data | 当验证码类型为`Geetest`时该数据必须 | 否 |

例：

```js
// 极验验证
{
    "code":1,
    "msg":"验证成功",
    "data":
    {
        "success":1,
        "gt":"29e4e065c7ba05ff77ba896e5d577f89",
        "challenge":"bd26076b3afe9ed3c17738f3f8a7eec7",
        "new_captcha":1
    }
}
// 腾讯验证
{
    "code":1,
    "msg":"验证成功"
}
```

## 相关资源
- [腾讯验证](https://007.qq.com/web-access.html?ADTAG=acces.tab)
- [极验验证](https://docs.geetest.com/install/deploy/client/web)