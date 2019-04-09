import Vue from 'vue'
import Router from 'vue-router'
import setting from './setting'

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