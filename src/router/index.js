import Vue from 'vue'
import Router from 'vue-router'
import WritePage from '../components/WritePage.vue'
import ListPage from '../components/ListPage.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
    path: '/',
      component:ListPage
    },
    {
      path: '/write', 
      component: WritePage
    },
    {
      path: '/list',
      component: ListPage
    }
  ]
})