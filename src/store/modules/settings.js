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

    loading: false,
    logoutLoading: false,
    addBankAccountLoading: false,

    banks: [],
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
  },
}
