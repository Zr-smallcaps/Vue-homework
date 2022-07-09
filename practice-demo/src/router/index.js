import Vue from 'vue'
import VueRouter from 'vue-router'
import Class from '@/views/Class'
import Home from '@/views/Home'
import Order from '@/views/Order'
import My from '@/views/My'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/class',
        component: Class,
    },{
        path: '/order',
        component: Order,
    },{
        path: '/my',
        component: My,
    },
]

const router = new VueRouter({
    routes
})

export default router