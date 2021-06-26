import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Signup_buyer from '../views/Signup_buyer.vue'
import Signin from '../views/Signin.vue'
import Otp from '../views/Otp.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/signup',
        name: 'Signup',
        component: Signup
    }, {
        path: '/signup_buyer',
        name: 'Signup_buyer',
        component: Signup_buyer
    },
    {
        path: '/Signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/otp',
        name: 'Otp',
        component: Otp
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router