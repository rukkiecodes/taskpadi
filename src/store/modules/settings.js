import router from "../../router"
import Vue from "vue"

export default {
  state: {
    credential: {
      old_password: "",
      password: "",
      password_confirmation: "",
    },

    addBankAccountCredential: {
      bank_id: "",
      account_no: "",
      account_name: "",
    },

    resolveBankAccountCredential: {
      bank_id: "",
      account_no: "",
    },

    removeBankAccountCredential: {
      bank_id: "",
    },

    loading: false,

    logoutLoading: false,

    addBankAccountLoading: false,

    resolveBankAccountLoading: false,

    removeBankAccountLoading: false,

    banks: [],

    resolvedAccount: {},
  },

  getters: {
    banks: (state) => state.banks,
  },

  mutations: {
    changePassword: (state, response) => {
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.password[0],
        })
      }
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-unlock-alt"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    logoutOfAccount: (state, response) => {
      if (response.success == true) {
        Vue.prototype.$cookies.remove("PaddiData")
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-unlock-alt"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
        router.push("/")
      }
    },

    getBanks: (state, response) => {
      state.resolvedAccount = Vue.prototype.$cookies.get("PaddiResolved")
      state.resolveBankAccountCredential =
        Vue.prototype.$cookies.get("PaddiResolved")
      state.banks = []
      let bankData = response.banks
      for (let i = 0; i < bankData.length; i++) {
        state.banks.push(bankData[i])
      }
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
    },

    addBackAccount: (state, response) => {
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.bank_id[0],
        })
      }
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    resolveBackAccount: (state, response) => {
      Vue.prototype.$cookies.set("PaddiResolved", {
        account_name: response.account_name,
        bank_id: state.resolveBankAccountCredential.bank_id,
        account_no: state.resolveBankAccountCredential.account_no,
      })
      state.resolvedAccount = Vue.prototype.$cookies.get("PaddiResolved")
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.account_no[0],
        })
      }
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.bank_id[0],
        })
      }
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
    },

    removeBackAccount: (state, response) => {
      console.log(response)
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.bank_id[0],
        })
      }
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
    },
  },

  actions: {
    changePassword({ commit }) {
      if (
        this.state.settings.credential.password != "" &&
        this.state.settings.credential.password_confirmation != "" &&
        this.state.settings.credential.password ===
          this.state.settings.credential.password_confirmation
      ) {
        this.state.settings.loading = true
        let token = Vue.prototype.$cookies.get("PaddiData").access_token
        fetch(location.origin + "/user/change-password", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.settings.credential),
        })
          .then((response) => response.json())
          .then((response) => {
            commit("changePassword", response)
            this.state.settings.loading = false
          })
          .catch((error) => {
            this.state.settings.loading = false
          })
      } else {
        this.state.settings.loading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: `Please complete the form and try again`,
        })
      }
    },

    logoutOfAccount({ commit }) {
      this.state.settings.logoutLoading = true
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(location.origin + "/user/logout", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          commit("logoutOfAccount", response)
          this.state.settings.logoutLoading = false
        })
        .catch((error) => {
          this.state.settings.logoutLoading = false
        })
    },

    getBanks({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(location.origin + "/banks", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          commit("getBanks", response)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    addBackAccount({ commit }) {
      if (
        this.state.settings.addBankAccountCredential.bank_id != "" &&
        this.state.settings.addBankAccountCredential.account_no != "" &&
        this.state.settings.addBankAccountCredential.account_name != ""
      ) {
        this.state.settings.addBankAccountLoading = true
        let token = Vue.prototype.$cookies.get("PaddiData").access_token
        fetch(location.origin + "/user/add-bank", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.settings.addBankAccountCredential),
        })
          .then((response) => response.json())
          .then((response) => {
            commit("addBackAccount", response)
            this.state.settings.addBankAccountLoading = false
          })
          .catch((error) => {
            console.log(error)
            this.state.settings.addBankAccountLoading = false
          })
      } else {
        this.state.settings.addBankAccountLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: `Please complete the form and try again`,
        })
      }
    },

    resolveBackAccount({ commit }) {
      if (
        this.state.settings.resolveBankAccountCredential.bank_id != "" &&
        this.state.settings.resolveBankAccountCredential.account_no != ""
      ) {
        this.state.settings.resolveBankAccountLoading = true
        let token = Vue.prototype.$cookies.get("PaddiData").access_token
        fetch(location.origin + "/user/resolve-account", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            this.state.settings.resolveBankAccountCredential
          ),
        })
          .then((response) => response.json())
          .then((response) => {
            commit("resolveBackAccount", response)
            this.state.settings.resolveBankAccountLoading = false
          })
          .catch((error) => {
            console.log(error)
            this.state.settings.resolveBankAccountLoading = false

            Vue.prototype.$vs.notification({
              icon: `<i class="las la-exclamation-triangle"></i>`,
              border: "rgb(255, 71, 87)",
              position: "top-right",
              title: "Oops!!!",
              text: error,
            })
          })
      } else {
        this.state.settings.resolveBankAccountLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: `Please complete the form and try again`,
        })
      }
    },

    removeBackAccount({ commit }) {
      if (this.state.settings.removeBankAccountCredential.bank_id != "") {
        this.state.settings.removeBankAccountLoading = true
        let token = Vue.prototype.$cookies.get("PaddiData").access_token
        fetch(location.origin + "/user/remove-bank", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.settings.removeBankAccountCredential),
        })
          .then((response) => response.json())
          .then((response) => {
            commit("removeBackAccount", response)
            this.state.settings.removeBankAccountLoading = false
          })
          .catch((error) => {
            console.log(error)
            this.state.settings.removeBankAccountLoading = false
          })
      } else {
        this.state.settings.removeBankAccountLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: `Please complete the form and try again`,
        })
      }
    },
  },
}
