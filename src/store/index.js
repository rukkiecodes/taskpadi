import Vue from "vue";
import Vuex from "vuex";

import nav from "./modules/nav";
import faq from "./modules/faq"
import goodAndProductBuyer from "./modules/goodAndProductBuyer";
import snackbar from "./modules/snackbar"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    nav,
    faq,
    goodAndProductBuyer,
    snackbar,
  },
});
