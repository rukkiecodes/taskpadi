import Vue from "vue"
import axios from "axios"
import jquery from "jquery"

export default {
  state: {},
  getters: {},

  mutations: {
    getProfile: (state, response) => {
      console.log(response)
    },
  },

  actions: {
    async getProfile({ commit }) {
      try {
        const response = await Vue.prototype.$axios.get(
          "https://dev.trustpaddi.com/api/v1/user/profile",
          {
            headers: {
              authorization: `Bearer ${
                Vue.prototype.$cookies.get("PaddiData").access_token
              }`,
            },
          }
        )
        commit("getProfile", response)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
