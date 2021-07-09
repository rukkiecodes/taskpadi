import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    good_and_product: {
      track_1: false,
      track_2: false,
      track_3: false,
      track_4: false,
      track_5: false,
      track_6: false,
      track_7: false,
      activate_back_button: false,
      activate_next_button: true,
      buyer_email: "",
      buyer_phone_number: "",
      buyer_transaction_title: "",
      buyer_product_description: "",
      buyer_agreed_price: "",
      buyer_product_photo: [],
      buyer_product_condition: ["Brand new", "Fairely used", "Old"],
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
    go_back_to_gaps_email: (state) => {
      router.push("/good_and_prodict_seller");
      return state;
    },
    go_to_transaction_title: (state) => {
      if (state.good_and_product.buyer_phone_number != '') {
        router.push("transaction_title");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Please enter transaction title`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
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
  },
  getters: {},
};
