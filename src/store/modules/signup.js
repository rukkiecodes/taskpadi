import router from "../../router"
import Vue from "vue"

export default {
  state: {
    credential: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirmation: "",
      referral_code: "",
    },

    loading: false,
  },

  mutations: {
    signupUser: (state, response) => {
      Vue.prototype.$cookies.set("PaddiData", response.data)
      if (response.status == 201) {
        state.loading = false
        router.push("/dashboard/yourPaddiDashboard")
      } else {
        state.loading = false
        router.push("/signup")
      }
    },
  },

  actions: {
    async signupUser({ commit }) {
      const options = {
        url: location.origin + "/register",
        method: "POST",
        data: this.state.signup.credential,
      }

      let emailRegEx = /\S+@\S+\.\S+/

      this.state.signup.loading = true

      if (
        this.state.signup.credential.firstname != "" &&
        this.state.signup.credential.lastname != "" &&
        emailRegEx.test(this.state.signup.credential.email) &&
        this.state.signup.credential.password != "" &&
        this.state.signup.credential.password ===
          this.state.signup.credential.password_confirmation
      ) {
        try {
          const response = await Vue.prototype.$axios(options)
          commit("signupUser", response)
          this.state.signup.loading = false
        } catch (error) {
          console.log("Error with try:", error)
          this.state.signup.loading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-exclamation-triangle"></i>`,
            border: "rgb(255, 71, 87)",
            position: "top-right",
            title: "Error !!!",
            text: "This email exists. Try another.",
          })
        }
      } else {
        this.state.signup.loading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Error !!!",
          text: `Please complete the form and try again`,
        })
      }
    },
  },
}
