import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCountryCode from "vue-country-code";
import SmoothScrollbar from "vue-smooth-scrollbar";
import VueMeta from "vue-meta";
import Vuesax from "vuesax"

import "./vuesax.css"

Vue.use(Vuesax)

Vue.use(VueCountryCode);
Vue.use(SmoothScrollbar);
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
