import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '*',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/home/list',
            name: 'list',
            component(resovle) {
                require(['@/pages/list'], resovle)
            }
        },
        {
            path: '/home/infinitelist',
            name: 'infinitelist',
            component(resovle) {
                require(['@/pages/infinitelist'], resovle)
            }
        }

    ]
})
