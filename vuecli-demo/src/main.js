import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import Find from "@/views/Find"
import My from "@/views/My"
import Part from "@/views/Part"
import NotFound from "@/views/NotFound"

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
        component: Find,
    },
    {
        path: "/my",
        component: My,
    },
    {
        path: "/part",
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

Vue.config.productionTip = false;

new Vue({
    router, //关联到Vue实例
    render: (h) => h(App),
}).$mount("#app");
