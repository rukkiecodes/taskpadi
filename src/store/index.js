import Vue from "vue";
import Vuex from "vuex";
import app_drawer from "./modules/app_drawer";
import good_and_product_buyer from "./modules/good_and_product_buyer";
import router from "../router/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    app_nav_title: "",
    snackbar: {
      snackbar_state: false,
      text: `Hello, I'm a snackbar`,
      snackbar_color: "",
      snackbar_button_color: "",
      snackbar_text_color: "",
    },
  },
  mutations: {},
  actions: {
    app_bar_route() {
      this.state.app_nav_title = location.pathname;
    }
  },
  modules: {
    app_drawer,
    good_and_product_buyer
  },
});

export default store