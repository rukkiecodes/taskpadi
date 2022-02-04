import Vue from "vue"
import axios from "axios"
import location from "./location"

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

    userData: {},

    avatar: "",

    saveLoading: false,

    nigerianStates: [],
  },

  getters: {
    nigerianStates: (state) => state.nigerianStates,
  },

  mutations: {
    getProfile: (state, response) => {
      state.userData = {}
      state.userData = response.data

      console.log("axios user data: ", response)

      let number = state.userData.phone
      let arr = number.split("4")
      arr.shift()
      number = arr.join("4")

      state.credential = {
        firstname: state.userData.firstName,
        lastname: state.userData.lastName,
        phone_number: `0${number}`,
        country: state.userData.country,
        state: state.userData.state,
        lga: state.userData.lga,
        address: state.userData.address,
      }
    },

    getStates: (state, response) => {
      state.nigerianStates = []
      state.nigerianStates.push(...response.data.banks)

      console.log("states in nigeria: ", state.nigerianStates)
    },

    updateProfile: (state, response) => {
      console.log(response)
      if (response.data.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.data.errors.phone_number[0],
        })
      }
      if (response.data.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.data.errors.country[0],
        })
      }
      if (response.data.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.data.errors.address[0],
        })
      }
      if (response.data.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.data.errors.firstname[0],
        })
      }
      if (response.data.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.data.errors.lastname[0],
        })
      }
      if (response.data.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.data.errors.lga[0],
        })
      }
      if (response.data.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.data.errors.state[0],
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
      if (response.data.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-user"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.data.message,
        })
      }
    },
  },

  actions: {
    async getProfile({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

      let myHeaders = new Headers()
      myHeaders.append("Accept", "application/json")
      myHeaders.append("Authorization", `Bearer ${token}`)

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
      }

      fetch(location + "/user/profile", requestOptions)
        .then((response) => response.json())
        .then((response) => {
          commit("getProfile", response)
        })
        .catch((error) => console.log("error", error))
    },

    async getStates({ commit }) {
      const response = await Vue.prototype.$axios.get(location + "/states")
      commit("getStates", response)
    },

    async updateProfile({ commit, dispatch }) {
      this.state.account.saveLoading = true
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

      let formData = new FormData()
      formData.append("firstname", this.state.account.credential.firstname)
      formData.append("lastname", this.state.account.credential.lastname)
      formData.append(
        "phone_number",
        this.state.account.credential.phone_number
      )
      formData.append("country", this.state.account.credential.country)
      formData.append("state", this.state.account.credential.state)
      formData.append("lga", this.state.account.credential.lga)
      formData.append("address", this.state.account.credential.address)
      formData.append("avatar", this.state.account.credential.image)

      let options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "multipart/form-data",
        },
        body: formData,
      }

      fetch(location + "/user/profile", options)
        .then((response) => response.json())
        .then((response) => {
          return dispatch("getProfile").then(() => {
            commit("updateProfile", response)
            this.state.account.saveLoading = false
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
      this.state.account.credential.image = file
      this.state.account.image = URL.createObjectURL(file)

      Vue.prototype.$vs.notification({
        icon: `<i class="lar la-image"></i>`,
        border: "#46C93A",
        position: "top-right",
        title: "Yippee!!!",
        text: "Image selected ",
      })
      console.log(this.state.account.credential.image)
    },
  },
}
