import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCountryCode from 'vue-country-code'
import SmoothScrollbar from 'vue-smooth-scrollbar'

Vue.use(VueCountryCode);
Vue.use(SmoothScrollbar);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')