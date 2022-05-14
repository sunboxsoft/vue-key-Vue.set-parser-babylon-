import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CaculateRate from '@/components/CaculateRate'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/CaculateRate',
        name: 'CaculateRate',
        component: CaculateRate
    }, {
        path: '/CaculateRate',
        name: 'CaculateRate',
        component: CaculateRate
    }]
})