// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Carousel from 'element-ui'
import { get } from './utils/http'

Vue.use(VueAwesomeSwiper);
Vue.use(Carousel);
Vue.config.productionTip = false
Vue.prototype.$get = get;


// 注册中央事件总线
Vue.prototype.$event = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
