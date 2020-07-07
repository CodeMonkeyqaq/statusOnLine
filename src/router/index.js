import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import StatusList from '../views/StatusList.vue'
import StatusDetail from '../views/StatusDetail.vue'
import True from '../views/True.vue'
import Year from '../views/Year.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    alias:'/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/statusDetail',
    name: 'StatusDetail',
    component: StatusDetail
  },
  {
    path: '/statusList',
    name: 'StatusList',
    component: StatusList
  },
  {
    path: '/true',
    name: 'True',
    component: True
  },
  {
    path: '/year',
    name: 'Year',
    component: Year
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
