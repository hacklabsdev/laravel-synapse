import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/Welcome'
import authRoutes from './auth'

Vue.use(VueRouter)

const router = new VueRouter ({
    mode: 'history',
    routes: [
        ...authRoutes,
        {
            path: '/',
            component: Welcome
        }
    ]
})


export default router