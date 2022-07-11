// 路由-相关模块
// 1.引入vue
import Vue from 'vue';
// 2.引入VueRouter
import VueRouter from 'vue-router';
import Layout from '@/views/Layout';
import Home from '@/views/Home'
import Search from '@/views/Search'
// 3.注册路由
Vue.use(VueRouter);
// 4.配置路由规则
const routes = [
  {
    path: '/',
    redirect: '/layout/home',
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: 'search',
        component: Search,
        meta: {
          title: "搜索"
        }
      }
    ]
  }
];
//生成路由对象
const router = new VueRouter({
  routes,
});
//导出路由对象
export default router;
