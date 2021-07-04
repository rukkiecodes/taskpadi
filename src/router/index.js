import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup_seller from '../views/Signup_seller.vue'
import Signup_buyer from '../views/Signup_buyer.vue'
import Signin from '../views/Signin.vue'
import Forgot_password from '../views/Forgot_password.vue'
import Otp from '../views/Otp.vue'
import About from '../views/About.vue'
import Faq from '../views/Faq.vue'
import Good_and_prodict_buyer from '../views/Good_and_prodict_buyer.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/signup_seller',
        name: 'signup_seller',
        component: Signup_seller
    }, {
        path: '/signup_buyer',
        name: 'Signup_buyer',
        component: Signup_buyer
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    {
        path: '/forgot_password',
        name: 'forgot_password',
        component: Forgot_password
    },
    {
        path: '/otp',
        name: 'Otp',
        component: Otp
    },
    {
        path: '/faq',
        name: 'faq',
        component: Faq
    },
    {
        path: '/good_and_prodict_buyer',
        name: 'good_and_prodict_buyer',
        component: Good_and_prodict_buyer
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router