import Vue from 'vue';
import App from './App.vue';

import mymy from '@/views/Mymy';
import myhome from '@/views/Myhome';
import myorder from '@/views/Myorder';
import myclass from '@/views/Myclass';
import mysports from '@/views/Mysports';
// 2. 引入
import VueRouter from 'vue-router';
// import { component } from 'vue/types/umd';
// 3. 注册全局组件
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  // {
  //   path: '/',
  //   redirect: '/app',
  // },
  {
    path: '/mymy',
    name: mymy,
    component: mymy,
  },
  {
    name: myhome,
    path: '/myhome',
    component: myhome,
    children: [
      {
        path: 'sports',
        component: mysports,
      },
    ],
  },
  {
    name: myorder,
    path: '/myorder',
    component: myorder,
  },
  {
    path: '/myclass',
    name: myclass,
    component: myclass,
  },
];

const router = new VueRouter({
  routes, // routes是固定key(传入规则数组)
  // mode: "history" // 默认不写是"hash"
});

const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
console.log(vm);
