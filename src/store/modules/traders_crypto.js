import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    trader: {
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
    goto_trader_phone: (state) => {
      const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.trader.email_input.match(email_regex)) {
        router.push("/trader_crypto/trader_phone");
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
      router.push("/trader_crypto");
      state.trader.track_2 = false;
    },
    goto_trader_currency: (state) => {
      if (state.trader.phone_input != "") {
        router.push("trader_currency");
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
      router.push("trader_phone");
      state.trader.track_3 = false;
    },

    goto_trader_amount: (state) => {
      if (state.trader.currency_input != "") {
        router.push("trader_amount");
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
      router.push("trader_currency");
      state.trader.track_4 = false;
    },
    goto_trader_price: (state) => {
      if (state.trader.amount_input != "") {
        router.push("trader_price");
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
      router.push("trader_amount");
      state.trader.track_5 = false;
    },
    goto_trader_duration: (state) => {
      if (state.trader.price_input != "") {
        router.push("trader_transaction_duration");
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
      router.push("trader_price");
      state.trader.track_6 = false;
    }
  },
  actions: {
    goto_trader_phone({ commit }) {
      commit("goto_trader_phone");
    },
    go_back_to_traders_email({ commit }) {
      commit("go_back_to_traders_email");
    },
    goto_trader_currency({ commit }) {
      commit("goto_trader_currency");
    },
    go_back_to_phone({ commit }) {
      commit("go_back_to_phone");
    },
    goto_trader_amount({ commit }) {
      commit("goto_trader_amount");
    },
    go_back_to_currency({ commit }) {
      commit("go_back_to_currency");
    },
    goto_trader_price({ commit }) {
      commit("goto_trader_price");
    },
    go_back_to_amount({ commit }) {
      commit("go_back_to_amount");
    },
    goto_trader_duration({ commit }) {
      commit("goto_trader_duration");
    },
    go_back_to_price({ commit }) {
      commit("go_back_to_price");
    }
  },
};
