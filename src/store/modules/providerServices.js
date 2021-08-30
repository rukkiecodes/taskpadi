import snackbar from "./snackbar";
export default {
  state: {
    steps: 1,
    providerServicesInputs: {
      providersEmail: "",
      clientsMobileNumber: "",
      availableServices: "",
      transactionDuration: "",
      agreedAmount: "",
      whenToPay: "",
      termsOfContract: "",
    },
  },
  mutations: {
    toproviderServicesClientsMobileNumber: (state) => {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.providerServicesInputs.providersEmail.match(emailRegex)) {
        state.steps = 2;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a valid email`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 1;
      }
    },
    toproviderServicesAvailableServicesr: (state) => {
      if (state.providerServicesInputs.clientsMobileNumber != "") {
        state.steps = 3;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter Mobile number`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 2;
      }
    },
    toproviderServicesTransactionDuration: (state) => {
      if (state.providerServicesInputs.availableServices != "") {
        state.steps = 4;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter Available services`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 3;
      }
    },
    toproviderServicesAgreedAmount: (state) => {
      if (state.providerServicesInputs.transactionDuration != "") {
        state.steps = 5;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please pick Transaction duration`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 4;
      }
    },
    toproviderServicesWhenToPay: (state) => {
      if (state.providerServicesInputs.agreedAmount != "") {
        state.steps = 6;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter an Agreed amount`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 5;
      }
    },
    toproviderServicesTermsOfContract: (state) => {
      if (state.providerServicesInputs.whenToPay != "") {
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
    toproviderServicesClientsMobileNumber({ commit }) {
      commit("toproviderServicesClientsMobileNumber");
    },
    toproviderServicesAvailableServicesr({ commit }) {
      commit("toproviderServicesAvailableServicesr");
    },
    toproviderServicesTransactionDuration({ commit }) {
      commit("toproviderServicesTransactionDuration");
    },
    toproviderServicesAgreedAmount({ commit }) {
      commit("toproviderServicesAgreedAmount");
    },
    toproviderServicesWhenToPay({ commit }) {
      commit("toproviderServicesWhenToPay");
    },
    toproviderServicesTermsOfContract({ commit }) {
      commit("toproviderServicesTermsOfContract");
    },
  },
};
