import Vue from "vue"

export default {
  state: {
    withdrawDialog: true,
    loading: false,
    banks: [],
  },

  getters: {
    banks: (state) => state.banks,
  },

  mutations: {
    getBanks: (state, response) => {
      state.resolvedAccount = Vue.prototype.$cookies.get("PaddiResolved")
      state.resolveBankAccountCredential =
        Vue.prototype.$cookies.get("PaddiResolved")
      state.banks = []
      let bankData = response.banks
      for (let i = 0; i < bankData.length; i++) {
        state.banks.push(bankData[i])
      }
    },
  },

  actions: {
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
  },
}
