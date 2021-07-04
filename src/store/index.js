import Vue from "vue";
import Vuex from "vuex";
import app_drawer from "./modules/app_drawer";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    app_nav_title: "",
    good_and_product: {
      seller_email: true,
      seller_phone_number: false,
      product_name: false,
      agreed_price: false,
      product_description: false,
      product_condition: false,
      who_handles_delivery: false,
    },
  },
  mutations: {
    toggle_drawer: (state) => {
      state.drawer = true;
    },
    next_form: (state) => {
      console.log(state);
    },
  },
  actions: {
    app_bar_route() {
      this.state.app_nav_title = location.pathname;
    },

    next_form({ commit }) {
      commit("next_form");
    },
  },
  modules: {
    app_drawer,
  },
});
