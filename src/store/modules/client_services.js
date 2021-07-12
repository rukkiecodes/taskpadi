import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    client: {
      track_1: false,
      track_2: false,
      track_3: false,
      track_4: false,
      track_5: false,
      track_6: false,
      track_7: false,
      activeate_back_button: false,
      activeate_next_button: false,
      name_input: "",
      phone_input: "",
      amount_input: "",
      duration_input: "",
      client_services_input: "",
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
    goto_client_phone: (state) => {
      if (state.client.name_input != "") {
        router.push("/client_services/client_phone");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please enter a valide name`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_clients_name: (state) => {
      router.push("/client_services");
      state.client.track_2 = false;
    },
    goto_client_services: (state) => {
      if (state.client.phone_input != "") {
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
    goto_client_amount: (state) => {
      if (state.client.duration_input != "") {
        router.push("client_amount");
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
    go_back_to_client_phone: (state) => {
      router.push("client_phone");
      state.client.track_3 = false;
    },
    goto_client_service_duration: (state) => {
      if (state.client.client_services_input != "") {
        router.push("client_transaction_duration");
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
    goback_client_available_services: (state) => {
      router.push("available_services");
      state.client.track_4 = false;
    },
    go_back_to_client_duration: (state) => {
      router.push("client_transaction_duration");
      state.client.track_5 = false;
    },
    goto_client_when_to_pay: (state) => {
      if (state.client.amount_input != "") {
        router.push("client_when_to_pay");
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
    go_back_to_client_amount: (state) => {
      router.push("client_amount");
      state.client.track_6 = false;
    },
    goto_client_terms_of_contract: (state) => {
      if (state.client.when_to_pay_input != "") {
        router.push("client_contract_terms");
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
    go_back_to_client_when_to_pay: (state) => {
      router.push("client_when_to_pay");
      state.client.track_7 = false;
    },
  },
  actions: {
    goto_client_phone({ commit }) {
      commit("goto_client_phone");
    },
    go_back_to_clients_name({ commit }) {
      commit("go_back_to_clients_name");
    },
    goto_client_services({ commit }) {
      commit("goto_client_services");
    },
    goto_client_amount({ commit }) {
      commit("goto_client_amount");
    },
    go_back_to_client_phone({ commit }) {
      commit("go_back_to_client_phone");
    },
    goto_client_service_duration({ commit }) {
      commit("goto_client_service_duration");
    },
    goback_client_available_services({ commit }) {
      commit("goback_client_available_services");
    },
    go_back_to_client_duration({ commit }) {
      commit("go_back_to_client_duration");
    },
    goto_client_when_to_pay({ commit }) {
      commit("goto_client_when_to_pay");
    },
    go_back_to_client_amount({ commit }) {
      commit("go_back_to_client_amount");
    },
    goto_client_terms_of_contract({ commit }) {
      commit("goto_client_terms_of_contract");
    },
    go_back_to_client_when_to_pay({ commit }) {
      commit("go_back_to_client_when_to_pay");
    },
  },
  getters: {},
};
