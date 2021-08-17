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
      track_7: false,
      activeate_back_button: false,
      activeate_next_button: false,
      email_input: "",
      phone_input: "",
      amount_input: "",
      duration_input: "",
      provider_services_input: "",
      when_to_pay_input: "",
      terms_of_contract_input: "",
      when_to_pay_options: [
        "5 minutes",
        "10 minutes",
        "20 minutes",
        "30 minutes",
        "1 hour",
      ],
      dialog: false,
    },
  },
  mutations: {
    goto_provider_phone: (state) => {
      const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.provider.email_input.match(email_regex)) {
        router.push("/provider_services/provider_phone");
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
      router.push("/provider_services");
      state.provider.track_2 = false;
    },
    goto_provider_services: (state) => {
      if (state.provider.phone_input != "") {
        router.push("available_services");
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
    goto_provider_amount: (state) => {
      if (state.provider.duration_input != "") {
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
    go_back_to_provider_phone: (state) => {
      router.push("provider_phone");
      state.provider.track_3 = false;
    },
    goto_service_duration: (state) => {
      if (state.provider.provider_services_input != "") {
        router.push("provider_transaction_duration");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter services`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_available_services: (state) => {
      router.push("available_services");
      state.provider.track_4 = false;
    },
    go_back_to_pt_duration: (state) => {
      router.push("provider_transaction_duration");
      state.provider.track_5 = false;
    },
    goto_provider_when_to_pay: (state) => {
      if (state.provider.amount_input != "") {
        router.push("provider_when_to_pay");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter amount`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_provider_amount: (state) => {
      router.push("provider_amount");
      state.provider.track_6 = false;
    },
    goto_terms_of_contract: (state) => {
      if (state.provider.when_to_pay_input != "") {
        router.push("provider_contract_terms");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter a value`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_provider_when_to_pay: (state) => {
      router.push("provider_when_to_pay");
      state.provider.track_7 = false;
    },
  },
  actions: {
    goto_provider_phone({ commit }) {
      commit("goto_provider_phone");
    },
    go_back_to_providers_email({ commit }) {
      commit("go_back_to_providers_email");
    },
    goto_provider_services({ commit }) {
      commit("goto_provider_services");
    },
    goto_provider_amount({ commit }) {
      commit("goto_provider_amount");
    },
    go_back_to_provider_phone({ commit }) {
      commit("go_back_to_provider_phone");
    },
    goto_service_duration({ commit }) {
      commit("goto_service_duration");
    },
    go_back_available_services({ commit }) {
      commit("go_back_available_services");
    },
    go_back_to_pt_duration({ commit }) {
      commit("go_back_to_pt_duration");
    },
    goto_provider_when_to_pay({ commit }) {
      commit("goto_provider_when_to_pay");
    },
    go_back_to_provider_amount({ commit }) {
      commit("go_back_to_provider_amount");
    },
    goto_terms_of_contract({ commit }) {
      commit("goto_terms_of_contract");
    },
    go_back_to_provider_when_to_pay({ commit }) {
      commit("go_back_to_provider_when_to_pay");
    },
  },
};
