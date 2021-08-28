import Vue from "vue";
import Vuex from "vuex";

import nav from "./modules/nav";
import faq from "./modules/faq"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    nav,
    faq
  },
});
