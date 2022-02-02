// @ts-nocheck
import router from "../../router"
import axios from "axios"
import vueCookies from "vue-cookies"
import Vue from "vue"

export default {
  state: {
    credential: {
      email: "",
      password: "",
    },

    loading: false,
  },

  mutations: {
    signinUser: (state, response) => {
      Vue.prototype.$cookies.set("PaddiData", response.data)
      if (response.status == 200) {
        state.loading = false
        router.push("/dashboard/dashboard")
      } else {
        state.loading = false
        router.push("/signup")
      }
    },
  },

  actions: {
    async signinUser ({ commit }) {
      const options = {
        url: `${location.origin}/login`,
        method: "POST",
        data: this.state.signin.credential,
      }

      let emailRegEx = /\S+@\S+\.\S+/

      this.state.signin.loading = true

      if (
        emailRegEx.test(this.state.signin.credential.email) &&
        this.state.signin.credential.password != ""
      ) {
        try {
          const response = await Vue.prototype.$axios(options)
          commit("signinUser", response)
          this.state.signin.loading = false
        } catch (error) {
          console.log(error)
          this.state.signin.loading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-exclamation-triangle"></i>`,
            border: "rgb(255, 71, 87)",
            position: "top-right",
            title: "Error !!!",
            text: `Sign in error. Check your details the try again.`,
          })
        }
      } else {
        this.state.signin.loading = false
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
