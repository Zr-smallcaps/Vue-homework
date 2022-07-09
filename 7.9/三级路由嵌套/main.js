import Vue from 'vue'
import App from './App.vue'
import Find from './views/Find'
import My from './views/My'
import Part from './views/Part'
import NotFound from './views/NotFound.vue'
import Ranking from './views/Second/Ranking.vue'
import Recommend from './views/Second/Recommend.vue'
import SongList from "./views/Second/SongList.vue"
import SmallThird from "./views/Second/smallcaps/SmallThird.vue"
// 目标: vue-router基础使用
// 1. 下载vue-router  (yarn add vue-router)
// 2. 引入路由
import VueRouter from 'vue-router'
// 3. 注册全局组件
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
// 4. 规则数组
const routes = [
  {
    path: '/',
    redirect: '/find'
  },
  {
    path: "/find",
    component: Find,
    children: [
      {
        path: 'ranking',
        component: Ranking,
        children: [
          {
            path: 'smallthird',
            component: SmallThird
          }

        ]
      },
      {
        path: 'recommend',
        component: Recommend
      },
      {
        path: 'songlist',
        component: SongList
      }
    ]
  },{
    path: '/my',
    component: My
  },
  {
    path: '/part',
    name: 'part',
    component: Part
  },
  {
    path: '*',
    component: NotFound
  }
]
// 5. 生成路由对象// routes是固定key(传入规则数组)
const router = new VueRouter({
  routes,
  mode: 'history'
})
 // mode: "history" // 默认不写是"hash"

// 目标: 路由守卫
// 场景: 当你要对路由权限判断时
// 语法: router.beforeEach((to, from, next)=>{//路由跳转"之前"先执行这里, 决定是否跳转})
// 参数1: 要跳转到的路由 (路由对象信息)    目标
// 参数2: 从哪里跳转的路由 (路由对象信息)  来源
// 参数3: 函数体 - next()才会让路由正常的跳转切换, next(false)在原地停留, next("强制修改到另一个路由路径上")
// 注意: 如果不调用next, 页面留在原地
const isLogin = true;//不能登录状态
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  if(to.path === '/my' && isLogin){
    alert('登录成功')
    next() // 放行
   // next('/') //
  }else{
    next(false) // 条件不满足 阻止跳转
  }

})
// 例子: 判断用户是否登录, 是否决定去"我的音乐"/my
// 登录状态(未登录)


// 6. 路由对象注入到vue实例中, this可以访问$route和$router
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
console.log(router)