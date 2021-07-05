import Vue from "vue";
import Vuex from "vuex";
import app_drawer from "./modules/app_drawer";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    app_nav_title: "",
    good_and_product: {
      activate_back_button: false,
      activate_next_button: true,
      seller_email_input: "",
      seller_phone_input: "",
      product_name_input: "",
      product_price_input: "",
      product_description_input: ""
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
    goto_sellers_phone_number: (state) => {
      const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.good_and_product.seller_email_input.match(email_regex)) {
        router.push("good_and_product_buyer/seller_phone_number");
      } else {
        state.snackbar = {
          snackbar_state: true,
          text: `Please enter a valid email address`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    goto_product_name: (state) => {
      if (state.good_and_product.seller_phone_input != "") {
        router.push("product_name");
      }
      else {
        state.snackbar = {
          snackbar_state: true,
          text: `Please enter a valid phone number`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    goto_product_price: (state) => {
      if (state.good_and_product.product_name_input != "") {
        router.push("product_price");
      }
      else {
        state.snackbar = {
          snackbar_state: true,
          text: `Please enter product name`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_to_product_description: (state) => {
      if (state.good_and_product.product_price_input != "") {
        router.push("product_description");
      }
      else {
        state.snackbar = {
          snackbar_state: true,
          text: `Product price can not be empty`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
  },
  actions: {
    app_bar_route() {
      this.state.app_nav_title = location.pathname;
    },

    goto_sellers_phone_number({ commit }) {
      commit("goto_sellers_phone_number");
    },
    goto_product_name({ commit }) {
      commit("goto_product_name");
    },
    goto_product_price({ commit }) {
      commit("goto_product_price");
    },
    go_to_product_description({ commit }) {
      commit("go_to_product_description");
    },

    sellers_phone_email() {
      this.state.good_and_product.activate_back_button = false;
    },
    activate_back_button() {
      this.state.good_and_product.activate_back_button = true;
    },
    go_back_to_seller_email: () =>  router.push("/good_and_product_buyer"),
    go_back_to_seller_phone: () => router.push("seller_phone_number"),
    go_back_to_product_name: () => router.push("product_name")
  },
  modules: {
    app_drawer,
  },
});
