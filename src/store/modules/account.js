import Vue from "vue"

export default {
  state: {
    editAvatarDialog: false,
    credential: {
      firstname: "",
      lastname: "",
      phone_number: "",
      country: "",
      state: "",
      lga: "",
      address: "",
    },

    userData: null
  },
  getters: {},

  mutations: {
    getProfile: (state, response) => {
      state.userData = response.data
      console.log(state.userData)
    },

    setImage: (state, response) => {
      console.log(response)
    },
  },

  actions: {
    async getProfile({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

      fetch(location.origin + "/user/profile", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          commit("getProfile", response)
        })
        .catch((error) => {
          console.log("Error: ", error)
        })
    },

    async updateProfile({ commit }) {
      try {
        const response = await Vue.prototype.$axios.post(
          "https://dev.trustpaddi.com/api/v1/user/profile",
          {
            headers: {
              authorization: `Bearer ${
                Vue.prototype.$cookies.get("PaddiData").access_token
              }`,
            },
          }
        )
      } catch (error) {
        console.log(error)
      }
    },

    async setImage({ commit }, file) {
      let formData = new FormData()
      formData.append("file", file)
      this.state.account.editAvatarDialog = false

      this.state.account.credential.avatar = formData

      try {
        const response = await Vue.prototype.$axios.post(
          "https://dev.trustpaddi.com/api/v1/user/profile",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " +
                Vue.prototype.$cookies.get("PaddiData").access_token,
            },
          },
          this.state.account.credential
        )
        commit("setImage", response)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
