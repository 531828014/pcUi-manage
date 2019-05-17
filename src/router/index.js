import Vue from 'vue'
import setting from './setting'
import Router from 'vue-router'

Vue.use(Router)
var routes = [
    {
        path: '/',
        redirect: '/login',
        hidden: true
    },
    {
        path: '/login',
        name: 'login',
        hidden: true,
        meta: {
            index: 0
        },
        component: () => import('views/login/login')
    },
].concat(setting)

export default new Router({
    routes: routes
})