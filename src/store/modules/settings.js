import Vue from "vue"

export default {
  state: {
    credential: {
      old_password: "",
      password: "",
      password_confirmation: "",
    },

    loading: false,
  },

  getters: {},

  mutations: {
    changePassword: (state, response) => {
      if (response.message == "The given data was invalid.") {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.errors.password[0],
        })
      }
      if (response.success == true) {
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-unlock-alt"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
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
        let token = Vue.prototype.$cookies.get("PaddiData").access_token
        fetch(location.origin + "/user/change-password", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.settings.credential),
        })
          .then((response) => response.json())
          .then((response) => {
            commit("changePassword", response)
            this.state.settings.loading = false
          })
          .catch((error) => {
            this.state.settings.loading = false
          })
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
  },
}
