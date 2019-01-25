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

<style>

</style>
