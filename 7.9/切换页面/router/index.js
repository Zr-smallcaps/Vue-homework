import Vue from 'vue'
import VueRouter from 'vue-router'
import MyFirst from '@/views/MyFirst'
import MySecond from '@/views/MySecond'
import Mythird from '@/views/MyThird'
import MyFourth from '@/views/MyFourth'
Vue.use(VueRouter)

const routes = [
  {
    path: '/first',
    name: 'first',
    component: MyFirst
  },
  {
    path: '/second',
    name: 'second',
    component: MySecond
  },
  {
    path: '/third',
    name: 'third',
    component: Mythird
  },
  {
    path: '/fourth',
    name: 'fourth',
    component: MyFourth
  },

]
const router = new VueRouter({
  routes
})

export default router
