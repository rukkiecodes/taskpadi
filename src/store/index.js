import Vue from "vue";
import Vuex from "vuex";
import app_drawer from "./modules/app_drawer";
import good_and_product_buyer from "./modules/good_and_product_buyer";
import snackbar_state from "./modules/snackbar_state";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app_nav_title: "",
  },
  actions: {
    app_bar_route() {
      this.state.app_nav_title = location.pathname;
    }
  },
  modules: {
    app_drawer,
    good_and_product_buyer,
    snackbar_state
  },
});