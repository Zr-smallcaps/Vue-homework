import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import Find from "@/views/Find"
import My from "@/views/My"
import Part from "@/views/Part"
import NotFound from "@/views/NotFound"
import Recommend from "@/views/Second/Recommend"
import Ranking from "@/views/Second/Ranking"
import SongList from "@/views/Second/SongList"

// 在vue中，使用使用vue的插件，都需要调用Vue.use()
Vue.use(VueRouter)
// 创建路由规则数组
const routes = [
    {
        path: "/",
        redirect: "/find",
    },
    {
        path: "/find",
        name: "Find",
        component: Find,
        children: [
            {
                path: "recommend",
                component: Recommend,
            },
            {
                path: "ranking",
                component: Ranking,
            },
            {
                path: "songlist",
                component: SongList,
            }
        ]
    },
    {
        path: "/my",
        name: "My",
        component: My,
    },
    {
        path: "/part",
        name: "Part",
        component: Part,
    },
    {
        path: "/part/:username",
        component: Part,
    },
    {
        path: "*",
        component: NotFound,
    },
]

// 创建路由对象 -  传入规则
const router = new VueRouter({
    routes,
    // mode: "history"
});

// 例子: 判断用户是否登录, 是否决定去"我的音乐"/my
const isLogin = true; // 登录状态（未登录）
router.beforeEach((to, from, next) => {
    if(to.path === "/my" && isLogin === false) {
        alert("请登录")
        next(false) // 阻止路由跳转
    } else {
        next() // 正常放行
    }
})

Vue.config.productionTip = false;

new Vue({
    router, //关联到Vue实例
    render: (h) => h(App),
}).$mount("#app");
