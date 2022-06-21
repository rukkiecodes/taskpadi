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
      account_no: "6553754101",
      account_name: "Terry Amagboro",
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
      if (response.data.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.data.message,
        })
      }
      if (response.data.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.data.message,
        })
      }
    },

    resolveBackAccount: (state, response) => {
      console.log("resolveBackAccount: ", response)
      Vue.prototype.$cookies.set("PaddiResolved", response.data.bank)
      state.resolvedAccount = Vue.prototype.$cookies.get("PaddiResolved")
      if (response.data.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.data.message,
        })
      }
      if (response.data.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Yippee!!!",
          text: response.data.message,
        })
      }
    },

    removeBankAccount: (state, response) => {
      console.log("removeBankAccount: ", response)
      if (response.data.success == true) {
        state.resolveBankAccountLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.data.message,
        })
      }
      if (response.data.success == false) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-university"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Yippee!!!",
          text: response.data.message,
        })
      }
    },
  },

  actions: {
    async changePassword ({ commit }) {
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

    logoutOfAccount ({ commit }) {
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

    async getBanks ({ commit }) {
      try {
        let banks = await axios.get("https://trustpaddi.herokuapp.com/banks")
        commit("getBanks", banks)
      } catch (error) {
        console.log(error)
      }
    },

    async getUserBanks ({ commit }) {
      let user = Vue.prototype.$cookies.get("PaddiData").user._id
      let token = Vue.prototype.$cookies.get("PaddiData").token

      let banks = await axios({
        method: 'get',
        url: `https://trustpaddi.herokuapp.com/banks/userBanks/${user}`,
        headers: { 'Authorization': `Bearer ${token}` }
      })
      commit("getUserBanks", banks)
    },

    async addBankAccount ({ commit, dispatch }) {
      let input = this.state.settings.addBankAccountCredential
      let user = Vue.prototype.$cookies.get("PaddiData").user._id
      let token = Vue.prototype.$cookies.get("PaddiData").token

      if (
        input.bank_id != "" &&
        input.account_no != "" &&
        input.account_name != ""
      ) {
        this.state.settings.addBankAccountLoading = true

        let bank = await axios({
          method: 'post',
          url: "https://trustpaddi.herokuapp.com/banks/addBank",
          headers: { 'Authorization': `Bearer ${token}` },
          body: {
            user,
            bankId: input.bank_id,
            accountNumber: input.account_no,
            accountName: input.account_name,
          }
        })

        return dispatch("getUserBanks").then(() => {
          commit("addBankAccount", bank)
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

    async resolveBackAccount ({ commit }) {
      let input = this.state.settings.resolveBankAccountCredential
      let user = Vue.prototype.$cookies.get("PaddiData").user._id

      if (input.bank_id != "" && input.account_no != "") {
        this.state.settings.resolveBankAccountLoading = true

        try {
          let bank = await axios.post(
            "https://trustpaddi.herokuapp.com/banks/resolveBank",
            {
              user,
              bankId: input.bank_id,
              accountNumber: input.account_no,
            }
          )
          commit("resolveBackAccount", bank)
          this.state.settings.resolveBankAccountLoading = false
        } catch (error) {
          console.log(error)
          this.state.settings.resolveBankAccountLoading = false
        }
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

    async removeBankAccount ({ commit, dispatch }) {
      if (this.state.settings.removeBankAccountCredential.bank_id != "") {
        try {
          let bank = await axios.post(
            "https://trustpaddi.herokuapp.com/banks/removeBank",
            {
              bankId: this.state.settings.removeBankAccountCredential.bank_id,
            }
          )

          return dispatch("getUserBanks").then(() => {
            commit("removeBankAccount", bank)
            this.state.settings.removeBankAccountLoading = false
          })
        } catch (error) {
          console.log(error)
          this.state.settings.removeBankAccountLoading = false
        }
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
