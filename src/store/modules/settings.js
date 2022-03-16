import router from "../../router"
import Vue from "vue"
import axios from "axios"

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

    userBanks: [],
  },

  getters: {
    banks: (state) => state.banks,
    userBanks: (state) => state.userBanks,
  },

  mutations: {
    changePassword: (state, response) => {
      console.log("New password: ", response)
      if (response.data.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-unlock-alt"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.data.message,
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
      state.banks.push(...response.data.banks)
    },

    getUserBanks: (state, response) => {
      console.log("getUserBanks: ", response.data.bank)
      state.userBanks = []
      state.userBanks.push(...response.data.bank)
    },

    addBankAccount: (state, response) => {
      console.log("addBankAccount: ", response)
      // if (response.success == true) {
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-university"></i>`,
      //     border: "#46C93A",
      //     position: "top-right",
      //     title: "Yippee!!!",
      //     text: response.message,
      //   })
      // }
      // if (response.success == false) {
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-exclamation-triangle"></i>`,
      //     border: "rgb(255, 71, 87)",
      //     position: "top-right",
      //     title: "Oops!!!",
      //     text: response.message,
      //   })
      // }
    },

    resolveBackAccount: (state, response) => {
      console.log("resolveBackAccount: ", response)
      // state.resolvedAccount = Vue.prototype.$cookies.get("PaddiResolved")
      // state.resolveBankAccountLoading = false
      // if (response.message == "The given data was invalid.") {
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-exclamation-triangle"></i>`,
      //     border: "rgb(255, 71, 87)",
      //     position: "top-right",
      //     title: "Oops!!!",
      //     text: response.errors.account_no[0],
      //   })
      // }
      // if (response.message == "The given data was invalid.") {
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-exclamation-triangle"></i>`,
      //     border: "rgb(255, 71, 87)",
      //     position: "top-right",
      //     title: "Oops!!!",
      //     text: response.errors.bank_id[0],
      //   })
      // }
      // if (response.success == true) {
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-university"></i>`,
      //     border: "#46C93A",
      //     position: "top-right",
      //     title: "Yippee!!!",
      //     text: response.message,
      //   })
      // }
      // if (response.success == false) {
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-university"></i>`,
      //     border: "rgb(255, 71, 87)",
      //     position: "top-right",
      //     title: "Yippee!!!",
      //     text: response.message,
      //   })
      // }
    },

    removeBankAccount: (state, response) => {
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
        state.resolveBankAccountLoading = false
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
    async changePassword({ commit }) {
      if (
        this.state.settings.credential.password != "" &&
        this.state.settings.credential.password_confirmation != "" &&
        this.state.settings.credential.password ===
          this.state.settings.credential.password_confirmation
      ) {
        this.state.settings.loading = true
        let token = Vue.prototype.$cookies.get("PaddiData").token
        let email = Vue.prototype.$cookies.get("PaddiData").user.email
        let input = this.state.settings.credential

        try {
          let password = await axios.post(
            "https://trustpaddi.herokuapp.com/auth/changePassword",
            {
              email,
              token,
              password: input.password,
            }
          )
          commit("changePassword", password)
          this.state.settings.loading = false
        } catch (error) {
          this.state.settings.loading = false
        }
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
      fetch(
        process.env.NODE_ENV === "production"
          ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/logout"
          : "/api/user/logout",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          commit("logoutOfAccount", response)
          this.state.settings.logoutLoading = false
        })
        .catch((error) => {
          this.state.settings.logoutLoading = false
        })
    },

    async getBanks({ commit }) {
      try {
        let banks = await axios.get("https://trustpaddi.herokuapp.com/banks")
        commit("getBanks", banks)
      } catch (error) {
        console.log(error)
      }
    },

    async getUserBanks({ commit }) {
      let user = Vue.prototype.$cookies.get("PaddiData").user._id

      try {
        let banks = await axios.post(
          "https://trustpaddi.herokuapp.com/banks/userBanks",
          {
            user,
          }
        )
        commit("getUserBanks", banks)
      } catch (error) {
        console.log(error)
      }
    },

    async addBankAccount({ commit, dispatch }) {
      let input = this.state.settings.addBankAccountCredential
      let user = Vue.prototype.$cookies.get("PaddiData").user._id
      if (
        input.bank_id != "" &&
        input.account_no != "" &&
        input.account_name != ""
      ) {
        this.state.settings.addBankAccountLoading = true

        try {
          let bank = await axios.post(
            "https://trustpaddi.herokuapp.com/banks/addBank",
            {
              user,
              bankId: input.bank_id,
              accountNumber: input.account_no,
              accountName: input.account_name,
            }
          )

          return dispatch("getUserBanks").then(() => {
            commit("addBankAccount", bank)
            this.state.settings.addBankAccountLoading = false
          })
        } catch (error) {
          console.log(error)
          this.state.settings.addBankAccountLoading = false
        }
        // fetch("https://trustpaddi.herokuapp.com/banks/addBank", {
        //   method: "POST",
        //   body: JSON.stringify({
        //     user,
        //     bankId: `${input.bank_id}`,
        //     accountNumber: `${input.account_no}`,
        //     accountName: `${input.account_name}`,
        //   }),
        // })
        //   .then((response) => response.json())
        //   .then((response) => {
        //     return dispatch("getUserBanks").then(() => {
        //       commit("addBankAccount", response)
        //       this.state.settings.addBankAccountLoading = false
        //     })
        //   })
        //   .catch((error) => {
        //     console.log(error)
        //     this.state.settings.addBankAccountLoading = false
        //   })
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
      let input = this.state.settings.resolveBankAccountCredential
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      if (input.bank_id != "" && input.account_no != "") {
        this.state.settings.resolveBankAccountLoading = true
        fetch(
          process.env.NODE_ENV === "production"
            ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/resolve-account"
            : "/api/user/resolve-account",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          }
        )
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

    removeBankAccount({ commit, dispatch }) {
      if (this.state.settings.removeBankAccountCredential.bank_id != "") {
        console.log(this.state.settings.removeBankAccountCredential)
        this.state.settings.removeBankAccountLoading = true
        let token = Vue.prototype.$cookies.get("PaddiData").access_token
        fetch(
          process.env.NODE_ENV === "production"
            ? "https://corsanywhere.herokuapp.com/https://dev.trustpaddi.com/api/v1/user/remove-bank"
            : "/api/user/remove-bank",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              this.state.settings.removeBankAccountCredential
            ),
          }
        )
          .then((response) => response.json())
          .then((response) => {
            return dispatch("getUserBanks").then(() => {
              commit("removeBankAccount", response)
              this.state.settings.removeBankAccountLoading = false
            })
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
