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

    userData: null,

    avatar: null,

    saveLoading: false,
  },
  getters: {},

  mutations: {
    getProfile: (state, response) => {
      setTimeout(() => {
        state.userData = null
        state.userData = response.data
        console.log(state.userData)
      }, 1000)
    },

    setImage: (state, response) => {
      console.log(response)
    },

    updateProfile: (state, response) => {
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
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

      this.state.account.saveLoading = true

      let formData = new FormData()
      formData.append("avatar", this.state.account.credential.avatar)

      fetch(location.origin + "/user/profile", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: this.state.account.credential.firstname,
          lastname: this.state.account.credential.lastname,
          phone_number: this.state.account.credential.phone_number,
          country: this.state.account.credential.country,
          state: this.state.account.credential.state,
          lga: this.state.account.credential.lga,
          address: this.state.account.credential.address,
          formData,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          commit("updateProfile", response)
          this.state.account.saveLoading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-user"></i>`,
            border: "#46C93A",
            position: "top-right",
            title: "Success",
            text: `Profile updated successfully`,
          })
        })
        .catch((error) => {
          console.log("Error: ", error)
          this.state.account.saveLoading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-exclamation-triangle"></i>`,
            border: "rgb(255, 71, 87)",
            position: "top-right",
            title: "Error !!!",
            text: `Update in error. Check your details the try again.`,
          })
        })
    },

    setImage({ commit }, file) {
      this.state.account.credential.avatar = file
      this.state.account.avatar = URL.createObjectURL(file)
      console.log(this.state.account.credential.avatar)
    },
  },
}
