import Vue from 'vue'
import App from './App.vue'
import My from '@/components/my.vue'
import Item from '@/components/item.vue'
import Index from '@/components/index.vue'
import Fenlei from '@/components/fenlei.vue'
import Item2 from '@/components/itemchild/item2.vue'
import index2 from '@/components/itemchild/reindex.vue'
import Item3 from '@/components/three/item3.vue'



import VueRouter from 'vue-router';

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/my'

  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/item',
    component: Item,
    children: [
      {
        path: 'item2',
        component: Item2,
        children: [
          {
            path: 'item3',
            component: Item3,
          }
        ]
      }
    ]
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: 'index2',
        component: index2
      }
    ]
  },
  {
    path: '/fenlei',
    component: Fenlei
  }
]
var router = new VueRouter({     // 配置路由     
  routes,
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
