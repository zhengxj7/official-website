import Vue from 'vue'
import Router from 'vue-router'
// 网站首页
import WebsiteIndex from '@/pages/index/index'
import productSummary from '@/components/productSummary'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WebsiteIndex',
      component: WebsiteIndex
    },
    {
      path: '/img',
      name: 'productSummary',
      component: productSummary
    }
  ]
})
