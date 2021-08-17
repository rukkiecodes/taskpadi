import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    good_and_product: {
      track_1: false,
      track_2: false,
      activate_back_button: false,
      activate_next_button: true,
      buyer_email: "",
      buyer_phone_number: "",
      buyer_transaction_title: "",
      buyer_product_description: "",
      buyer_agreed_price: "",
      buyer_product_photo: [],
      buyer_product_condition: "",
      buyer_photo_of_product: [],
    },
  },
  mutations: {
    go_to_buyer_phone: (state) => {
      const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.good_and_product.buyer_email.match(email_regex)) {
        router.push("good_and_prodict_seller/buyers_phone");
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
    go_back_to_gaps_email(state) {
      router.push("/good_and_prodict_seller");
      state.good_and_product.track_2 = false;
    },
    go_to_transaction_title(state) {
      if (state.good_and_product.buyer_phone_number != "") {
        router.push("transaction_title");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Please enter a valid mobile number`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_buyers_phone(state) {
      router.push("buyers_phone");
    },
    go_to_gaps_product_description(state) {
      if (state.good_and_product.buyer_transaction_title != "") {
        router.push("buyers_product_description");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Please enter product title`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_gaps_transaction_title(state) {
      router.push("transaction_title");
    },
    go_to_gaps_agreed_price(state) {
      if (state.good_and_product.buyer_product_description != "") {
        router.push("buyers_agreed_price");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Please enter product description`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_gaps_product_description(state) {
      router.push("buyers_product_description");
    },
    go_to_gaps_product_image: (state) => {
      if (state.good_and_product.buyer_agreed_price != "") {
        router.push("buyers_product_photo");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Please enter product price`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_gaps_agreed_price(state) {
      router.push("buyers_agreed_price");
    },
    go_to_gaps_product_condition(state) {
      if (state.good_and_product.buyer_product_photo.length != 0) {
        router.push("buyers_product_condition");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Please add a photo of the product`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_gaps_product_photo(state) {
      router.push("buyers_product_photo");
    },
    go_to_upload_product_image(state) {
      if (state.good_and_product.buyer_product_condition != "") {
        router.push("buyers_product_image");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Please select product condition`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_gaps_product_condition(state) {
      router.push("buyers_product_condition");
      state.good_and_product.track_2 = false;
    },
  },
  actions: {
    go_to_buyer_phone({ commit }) {
      commit("go_to_buyer_phone");
    },
    go_back_to_gaps_email({ commit }) {
      commit("go_back_to_gaps_email");
    },
    go_to_transaction_title({ commit }) {
      commit("go_to_transaction_title");
    },
    go_back_to_buyers_phone({ commit }) {
      commit("go_back_to_buyers_phone");
    },
    go_to_gaps_product_description({ commit }) {
      commit("go_to_gaps_product_description");
    },
    go_back_to_gaps_transaction_title({ commit }) {
      commit("go_back_to_gaps_transaction_title");
    },
    go_to_gaps_agreed_price({ commit }) {
      commit("go_to_gaps_agreed_price");
    },
    go_back_to_gaps_product_description({ commit }) {
      commit("go_back_to_gaps_product_description");
    },
    go_to_gaps_product_image({ commit }) {
      commit("go_to_gaps_product_image");
    },
    go_back_to_gaps_agreed_price({ commit }) {
      commit("go_back_to_gaps_agreed_price");
    },
    go_to_gaps_product_condition({ commit }) {
      commit("go_to_gaps_product_condition");
    },
    go_back_to_gaps_product_photo({ commit }) {
      commit("go_back_to_gaps_product_photo");
    },
    go_to_upload_product_image({ commit }) {
      commit("go_to_upload_product_image");
    },
    go_back_to_gaps_product_condition({ commit }) {
      commit("go_back_to_gaps_product_condition");
    },
  },
};
