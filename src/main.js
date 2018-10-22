// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Carousel from 'element-ui'
import axios from 'axios';

Vue.use(axios);

Vue.use(Carousel);
Vue.config.productionTip = false
Vue.prototype.$api = 'http://wms.zbering.com/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
