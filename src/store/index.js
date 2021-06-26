import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        app_nav_title: "",
        drawer: false,
        drawer_routs: [
            { title: 'Home', icon: 'mdi-view-dashboard', to: '/' },
            { title: 'About Us', icon: 'mdi-forum', to: '/about' },
            { title: 'FAQ', icon: 'mdi-forum', to: '/faq' },
            { title: 'Contact Us', icon: 'mdi-forum', to: '/contact' },
            { title: 'Pricing', icon: 'mdi-forum', to: '/pricing' },
        ],
    },
    getters: {
        drawer_routs: state => state.drawer_routs
    },
    mutations: {
        toggle_drawer: (state) => {
            state.drawer = true
        }
    },
    actions: {
        app_bar_route() {
            this.state.app_nav_title = location.pathname
        }
    },
    modules: {}
})