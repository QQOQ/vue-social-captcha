// 导入组件
import Captcha from './Captcha'

// 为组件提供 install 安装方法，供按需引入
Captcha.install = function (Vue) {
  Vue.component(Captcha.name, Captcha)
}

// 默认导出组件
export default Captcha