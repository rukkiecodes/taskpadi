import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    provider: {
      track_1: false,
      track_2: false,
      track_3: false,
      track_4: false,
      track_5: false,
      track_6: false,
      activeate_back_button: false,
      activeate_next_button: false,
      email_input: "",
      phone_input: "",
      currency_input: "",
      amount_input: "",
      price_input: "",
      duration_input: "",
      items: ["Less than 30 minutes", "1 hour", "5 hours"],
      currency: [
        "Bitcoin",
        "Ethereum",
        "Ethereum Classic",
        "Litecoin",
        "Namecoin",
        "Peercoin",
        "Dogecoin",
        "Gridcoin",
        "Primecoin",
        "Ripple",
        "Nxt",
        "Auroracoin",
        "Dash",
        "NEO",
        "MazaCoin",
        "Monero",
        "Titcoin",
        "Verge",
        "Stellar",
        "Vertcoin",
        "Nano",
        "Tether",
        "Firo",
        "Zcash",
        "Bitcoin Cash",
        "EOS.IO",
        "Cardano",
        "BitClout",
      ],
      time_visibility: false,
      dialog: false,
    },
  },
  mutations: {
    goto_provider_phone: (state) => {
      const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.provider.email_input.match(email_regex)) {
        router.push("/provider_crypto/provider_phone");
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
    go_back_to_providers_email: (state) => {
      router.push("/provider_crypto");
      state.provider.track_2 = false;
    },
    goto_provider_currency: (state) => {
      if (state.provider.phone_input != "") {
        router.push("provider_currency");
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
      router.push("provider_phone");
      state.provider.track_3 = false;
    },

    goto_provider_amount: (state) => {
      if (state.provider.currency_input != "") {
        router.push("provider_amount");
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
    go_back_to_currency: (state) => {
      router.push("provider_currency");
      state.provider.track_4 = false;
    },
    goto_provider_price: (state) => {
      if (state.provider.amount_input != "") {
        router.push("provider_price");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter an amount`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_amount: (state) => {
      router.push("provider_amount");
      state.provider.track_5 = false;
    },
    goto_provider_duration: (state) => {
      if (state.provider.price_input != "") {
        router.push("provider_transaction_duration");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter price`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_price: (state) => {
      router.push("provider_price");
      state.provider.track_6 = false;
    }
  },
  actions: {
    goto_provider_phone({ commit }) {
      commit("goto_provider_phone");
    },
    go_back_to_providers_email({ commit }) {
      commit("go_back_to_providers_email");
    },
    goto_provider_currency({ commit }) {
      commit("goto_provider_currency");
    },
    go_back_to_phone({ commit }) {
      commit("go_back_to_phone");
    },
    goto_provider_amount({ commit }) {
      commit("goto_provider_amount");
    },
    go_back_to_currency({ commit }) {
      commit("go_back_to_currency");
    },
    goto_provider_price({ commit }) {
      commit("goto_provider_price");
    },
    go_back_to_amount({ commit }) {
      commit("go_back_to_amount");
    },
    goto_provider_duration({ commit }) {
      commit("goto_provider_duration");
    },
    go_back_to_price({ commit }) {
      commit("go_back_to_price");
    }
  },
  getters: {},
};
