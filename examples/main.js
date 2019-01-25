import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Captcha from '../src/index'
Vue.use(Captcha)

new Vue({
  render: h => h(App),
}).$mount('#app')