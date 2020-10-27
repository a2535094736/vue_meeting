import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/element'
import './assets/css/common.css'
// https://blog.csdn.net/qq_41772754/article/details/88075391 
// axios 详细配置文档
import axios from 'axios'
// qs 用于对请求回来的数据进行包装可直接为data所用
import qs from 'qs'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
