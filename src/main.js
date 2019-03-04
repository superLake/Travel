import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'style/reset.css'
import 'style/border.css'
import fastClick from 'fastclick'
import 'style/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'babel-polyfill'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
