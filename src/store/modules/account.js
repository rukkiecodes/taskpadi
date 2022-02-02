import Vue from "vue"
import axios from "axios"

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
      state.userData = response.data.data

      console.log("User data: ", response.data.data)

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
      console.log(token)
      const options = {
        url: `${location.origin}/user/profile`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
      await axios(options)
        .then((response) => {
          commit("getProfile", response)
        })
        .catch((error) => {
          console.log("Error: ", error)
        })
    },

    async getStates({ commit }) {
      axios
        .get(`${location.origin}/states`)
        .then((response) => {
          commit("getStates", response)
        })
        .catch((error) => {
          console.log("Error: ", error)
        })
    },

    async updateProfile({ commit, dispatch }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

      this.state.account.saveLoading = true

      let myHeaders = new Headers()
      myHeaders.append("Accept", "multipart/form-data")
      myHeaders.append("Authorization", `Bearer ${token}`)

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

      let requestOptions = {
        url: `${location.origin}/user/profile`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      }
      
      await axios(requestOptions)
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
