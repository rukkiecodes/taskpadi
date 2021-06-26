import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        app_nav_title: ""
    },
    mutations: {},
    actions: {
        app_bar_route() {
            // console.log(location.pathname)
            this.state.app_nav_title = location.pathname
        }
    },
    modules: {}
})