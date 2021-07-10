import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    custumer: {
      track_1: false,
      track_2: false,
      track_3: false,
      track_4: false,
      track_5: false,
      track_6: false,
      track_7: false,
      activeate_back_button: false,
      activeate_next_button: false,
      email_input: "",
      phone_input: "",
      currency_input: "",
    },
  },
  mutations: {
    goto_traders_phone: (state) => {
      const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.custumer.email_input.match(email_regex)) {
        router.push("/trade_crypto/traders_phone");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter a valide email`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_traders_email: (state) => {
      router.push("/trade_crypto");
      state.custumer.track_2 = false;
    },
    goto_currency: (state) => {
      if (state.custumer.phone_input != "") {
        router.push("traders_currency");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter a phone number`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_phone: (state) => {
      router.push("traders_phone");
      state.custumer.track_3 = false;
    },

    goto_traders_amount: (state) => {
      if (state.custumer.currency_input != "") {
        router.push("traders_amount");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter a currency`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
  },
  actions: {
    goto_traders_phone({ commit }) {
      commit("goto_traders_phone");
    },
    go_back_to_traders_email({ commit }) {
      commit("go_back_to_traders_email");
    },
    goto_currency({ commit }) {
      commit("goto_currency");
    },
    go_back_to_phone({ commit }) {
      commit("go_back_to_phone");
    },
    goto_traders_amount({ commit }) {
      commit("goto_traders_amount");
    },
  },
  getters: {},
};
