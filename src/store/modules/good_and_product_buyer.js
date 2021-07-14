import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    good_and_product: {
      track_1: false,
      track_2: false,
      activate_back_button: false,
      activate_next_button: true,
      seller_email_input: "",
      seller_phone_input: "",
      product_name_input: "",
      product_price_input: "",
      product_description_input: "",
      product_condition_input: "",
      handle_delivery_input: "",
    },
  },
  mutations: {
    goto_sellers_phone_number: (state) => {
      const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.good_and_product.seller_email_input.match(email_regex)) {
        router.push("good_and_product_buyer/seller_phone_number");
        state.good_and_product.track_1 = true;
      } else {
        snackbar_state.state.snackbar = {
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
      } else {
        snackbar_state.state.snackbar = {
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
      } else {
        snackbar_state.state.snackbar = {
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
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Product price can not be empty`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_to_product_condition: (state) => {
      if (state.good_and_product.product_description_input != "") {
        router.push("condition");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Product description can not be empty`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_to_handle_delivery: (state) => {
      if (state.good_and_product.product_condition_input != "") {
        router.push("handle_delivery");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Product condition can not be empty`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    proceed_to_delivery_info: (state) => {
      if (state.good_and_product.handle_delivery_input != "") {
        router.push("/delivery_info");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Handle delivery can not be empty`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
  },
  actions: {
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
    go_to_product_condition({ commit }) {
      commit("go_to_product_condition");
    },
    go_to_handle_delivery({ commit }) {
      commit("go_to_handle_delivery");
    },
    go_back_to_seller_email() {
      router.push("/good_and_product_buyer");
    },
    go_back_to_seller_phone() {
      router.push("seller_phone_number");
    },
    go_back_to_product_name() {
      router.push("product_name");
    },
    go_back_to_product_price() {
      router.push("product_price");
    },
    go_back_to_product_description() {
      router.push("product_description");
    },
    go_back_to_product_condition() {
      router.push("condition");
    },
    proceed_to_delivery_info({ commit }) {
      commit("proceed_to_delivery_info");
    },
  },
};
