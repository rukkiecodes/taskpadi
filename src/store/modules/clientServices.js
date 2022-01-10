import snackbar from "./snackbar";
export default {
  state: {
    steps: 1,
    clientServicesInputs: {
      name: "",
      clientsMobileNumber: "",
      availableServices: "",
      transactionDuration: "",
      agreedAmount: "",
      whenToPay: "",
      termsOfContract: ""
    },
  },
  mutations: {
    toclientServicesClientsMobileNumber: (state) => {
      if (state.clientServicesInputs.name != "") {
        state.steps = 2;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter product name`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 1;
      }
    },
    toclientServicesAvailableServicesr: (state) => {
      if (state.clientServicesInputs.clientsMobileNumber != "") {
        state.steps = 3;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter Mobile number`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 2;
      }
    },
    toclientServicesTransactionDuration: (state) => {
      if (state.clientServicesInputs.availableServices != "") {
        state.steps = 4;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter Available services`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 3;
      }
    },
    toclientServicesAgreedAmount: (state) => {
      if (state.clientServicesInputs.transactionDuration != "") {
        state.steps = 5;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please pick Transaction duration`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 4;
      }
    },
    toclientServicesWhenToPay: (state) => {
      if (state.clientServicesInputs.agreedAmount != "") {
        state.steps = 6;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter an Agreed amount`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 5;
      }
    },
    toclientServicesTermsOfContract: (state) => {
      if (state.clientServicesInputs.whenToPay != "") {
        state.steps = 7;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please select when to pay`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 6;
      }
    },
  },
  actions: {
    toclientServicesClientsMobileNumber({ commit }) {
      commit("toclientServicesClientsMobileNumber");
    },
    toclientServicesAvailableServicesr({ commit }) {
      commit("toclientServicesAvailableServicesr");
    },
    toclientServicesTransactionDuration({ commit }) {
      commit("toclientServicesTransactionDuration");
    },
    toclientServicesAgreedAmount({ commit }) {
      commit("toclientServicesAgreedAmount");
    },
    toclientServicesWhenToPay({ commit }) {
      commit("toclientServicesWhenToPay");
    },
    toclientServicesTermsOfContract({ commit }) {
      commit("toclientServicesTermsOfContract");
    },
  },
};
