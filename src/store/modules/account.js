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
      state.userData = null
      state.userData = response.data
      state.avatar = response.data.avatar

      let number = state.userData.phone_number
      let arr = number.split("4")
      arr.shift()
      number = arr.join("4")

      state.credential = {
        firstname: state.userData.firstname,
        lastname: state.userData.lastname,
        phone_number: `0${number}`,
        country: state.userData.country,
        state: state.userData.state,
        lga: state.userData.lga,
        address: state.userData.address,
      }

      console.log(state.userData)
    },

    setImage: (state, response) => {
      console.log(response)
    },

    updateProfile: (state, response) => {
      console.log(response)
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.phone_number[0],
        })
      }
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.country[0],
        })
      }
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.address[0],
        })
      }
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.firstname[0],
        })
      }
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.lastname[0],
        })
      }
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.lga[0],
        })
      }
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.phone_number[0],
        })
      }
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.state[0],
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
      if (response.success == true) {
        state.avatar = state.userData.avatar
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-user"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
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

      let myHeaders = new Headers()
      myHeaders.append("Accept", "multipart/form-data")
      myHeaders.append("Authorization", "Bearer " + token)

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
      formData.append("avatar", this.state.account.credential.avatar)

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow",
      }

      fetch(location.origin + "/user/profile", requestOptions)
        .then((response) => response.json())
        .then((response) => {
          commit("updateProfile", response)
          this.state.account.saveLoading = false
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
