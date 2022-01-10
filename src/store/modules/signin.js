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
      if (response.status == 200) {
        state.loading = false
        vueCookies.set("tandom token", response.data.data.token, "7d")
        vueCookies.set("tandom user", response.data.data.user, "7d")
        router.push("/template/cataloge")
      } else {
        state.loading = false
        router.push("/signin")
      }
    },
  },

  actions: {
    async signinUser({ commit }) {
      let emailRegEx = /\S+@\S+\.\S+/
      this.state.signin.loading = true
      if (
        emailRegEx.test(this.state.signin.credential.email) &&
        this.state.signin.credential.password != ""
      ) {
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/signin",
            this.state.signin.credential
          )
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
