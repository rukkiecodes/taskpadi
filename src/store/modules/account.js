import Vue from "vue"
import axios from "axios"

export default {
  state: {
    editAvatarDialog: false,
    credential: {
      firstname: "",
      lastname: "",
      phone: "",
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
      state.userData = response.data.user

      state.credential = {
        firstname: state.userData.firstname,
        lastname: state.userData.lastname,
        phone: state.userData.phone,
        country: state.userData.country,
        state: state.userData.state,
        lga: state.userData.lga,
        address: state.userData.address,
      }
    },

    getStates: (state, response) => {
      state.nigerianStates = []
      state.nigerianStates.push(...response.data.states)
    },

    updateProfile: (state, response) => {
      if (response.data.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-user"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: "Profile updated successfully",
        })
      }
    },
  },

  actions: {
    async getProfile({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").token
      let email = Vue.prototype.$cookies.get("PaddiData").user.email

      try {
        let user = await axios.post(
          "https://trustpaddi.herokuapp.com/auth/profile",
          {
            token,
            email,
          }
        )
        commit("getProfile", user)
      } catch (error) {
        console.log("error", error)
      }
    },

    async getStates({ commit }) {
      const response = await axios.get(
        "https://trustpaddi.herokuapp.com/states"
      )
      commit("getStates", response)
    },

    async updateProfile({ commit, dispatch }) {
      this.state.account.saveLoading = true
      let token = Vue.prototype.$cookies.get("PaddiData").token
      let email = Vue.prototype.$cookies.get("PaddiData").user.email
      let input = this.state.account.credential

      try {
        let user = await axios.post(
          "https://trustpaddi.herokuapp.com/auth/updateProfile",
          {
            email,
            token,
            firstname: input.firstname,
            lastname: input.lastname,
            phone: input.phone,
            country: input.country,
            state: input.state,
            lga: input.lga,
            address: input.address,
          }
        )
        return dispatch("getProfile").then(() => {
          commit("updateProfile", user)
          this.state.account.saveLoading = false
        })
      } catch (error) {
        console.log("Error: ", error)
        this.state.account.saveLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Error!!!",
          text: `Update in error. Check your details the try again.`,
        })
      }
    },

    setImage({ commit, dispatch }, file) {
      let token = Vue.prototype.$cookies.get("PaddiData").token
      let email = Vue.prototype.$cookies.get("PaddiData").user.email

      var myHeaders = new Headers()
      myHeaders.append("Accept", "application/json")

      var formdata = new FormData()
      formdata.append("token", token)
      formdata.append("email", email)
      formdata.append("avatar", file)

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      }

      fetch("https://trustpaddi.herokuapp.com/auth/avatar", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          dispatch("getProfile")
        })
        .catch((error) => console.log("error", error))
    },
  },
}
