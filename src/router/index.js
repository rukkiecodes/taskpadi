import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    let user = Vue.prototype.$cookies.isKey("PaddiData")

    if (requiresAuth && !user) next('/')
    else if (requiresAuth && user) next()
    else next()
})

export default router