import Vue from "vue";
import Vuex from "vuex";
import app_drawer from "./modules/app_drawer";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    app_nav_title: "",
    good_and_product: {
      step_one: true,
      step_two: false,
      step_three: false,
      step_four: false,
      step_five: false,
      step_six: false,
      step_seven: false,
      activate_back_button: false,
      activate_next_button: true,
      seller_email: true,
      seller_phone_number: false,
      product_name: false,
      agreed_price: false,
      product_description: false,
      product_condition: false,
      who_handles_delivery: false,
      seller_email_input: "",
      seller_phone_input: "",
    },
    snackbar: {
      snackbar_state: false,
      text: `Hello, I'm a snackbar`,
      snackbar_color: "",
      snackbar_button_color: "",
      snackbar_text_color: "",
    },
  },
  mutations: {
    toggle_drawer: (state) => {
      state.drawer = true;
    },
    next_form: (state) => {
      const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.good_and_product.seller_email_input.match(email_regex)) {
        state.good_and_product.seller_email = false;
        state.good_and_product.seller_phone_number = true;
        state.good_and_product.activate_back_button = true;
      } else {
        state.snackbar.snackbar_state = true;
        state.snackbar.text = `Please input seller email`;
        state.snackbar.snackbar_color = `red`;
        state.snackbar.snackbar_button_color = `white`;
        state.snackbar.snackbar_text_color = `white--text`;
      }
    },
    prev_form: state => {
      if (state.good_and_product.seller_email == true) {
        state.good_and_product.activate_back_button = false;
        console.log(state.good_and_product.seller_email)
      }
      if (state.good_and_product.seller_phone_number == true) {
        state.good_and_product.seller_email = true
        state.good_and_product.product_name = false
        state.good_and_product.agreed_price = false
        state.good_and_product.product_description = false
        state.good_and_product.product_condition = false
        state.good_and_product.who_handles_delivery = false
        state.good_and_product.seller_phone_number = false
        state.good_and_product.activate_back_button = false;
        state.good_and_product.seller_phone_input = "";
        console.log(state.good_and_product.seller_phone_number)
      }
    }
  },
  actions: {
    app_bar_route() {
      this.state.app_nav_title = location.pathname;
    },

    next_form({ commit }) {
      commit("next_form");
    },
    prev_form({ commit }) {
      commit("prev_form");
    },
  },
  modules: {
    app_drawer,
  },
});
