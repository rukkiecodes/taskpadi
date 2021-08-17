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
    goto_custumer_phone: (state) => {
      const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.custumer.email_input.match(email_regex)) {
        router.push("/custumer_crypto/custumer_phone");
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
    go_back_to_cust_traders_email: (state) => {
      router.push("/custumer_crypto");
      state.custumer.track_2 = false;
    },
    goto_currency: (state) => {
      if (state.custumer.phone_input != "") {
        router.push("custumer_currency");
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
    go_back_to_cust_phone: (state) => {
      router.push("custumer_phone");
      state.custumer.track_3 = false;
    },

    goto_custumer_amount: (state) => {
      if (state.custumer.currency_input != "") {
        router.push("custumer_amount");
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
    go_back_to_cust_currency: (state) => {
      router.push("custumer_currency");
      state.custumer.track_4 = false;
    },
    goto_price: (state) => {
      if (state.custumer.amount_input != "") {
        router.push("custumer_price");
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
    go_back_to_cust_amount: (state) => {
      router.push("custumer_amount");
      state.custumer.track_5 = false;
    },
    goto_duration: (state) => {
      if (state.custumer.price_input != "") {
        router.push("custumer_transaction_duration");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter an price`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_cust_price: (state) => {
      router.push("custumer_price");
      state.custumer.track_6 = false;
    },
    go_back_to_wallet_address: (state) => {
      if (state.custumer.duration_input != "") {
        router.push("custumer_wallet_address");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter a set duration`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_cust_duration: (state) => {
      router.push("custumer_transaction_duration");
      state.custumer.track_7 = false;
    },
  },
  actions: {
    goto_custumer_phone({ commit }) {
      commit("goto_custumer_phone");
    },
    go_back_to_cust_traders_email({ commit }) {
      commit("go_back_to_cust_traders_email");
    },
    goto_currency({ commit }) {
      commit("goto_currency");
    },
    go_back_to_cust_phone({ commit }) {
      commit("go_back_to_cust_phone");
    },
    goto_custumer_amount({ commit }) {
      commit("goto_custumer_amount");
    },
    go_back_to_cust_currency({ commit }) {
      commit("go_back_to_cust_currency");
    },
    goto_price({ commit }) {
      commit("goto_price");
    },
    go_back_to_cust_amount({ commit }) {
      commit("go_back_to_cust_amount");
    },
    goto_duration({ commit }) {
      commit("goto_duration");
    },
    go_back_to_cust_price({ commit }) {
      commit("go_back_to_cust_price");
    },
    go_back_to_wallet_address({ commit }) {
      commit("go_back_to_wallet_address");
    },
    go_back_to_cust_duration({ commit }) {
      commit("go_back_to_cust_duration");
    },
  },
};
