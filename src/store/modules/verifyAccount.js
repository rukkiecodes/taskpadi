// @ts-nocheck
import router from "../../router"
import Vue from "vue"

export default {
  state: {
    credential: {
      email: "",
    },

    loading: false,
  },

  mutations: {
    verifyMyAccount: (state, response) => {
      console.log(response.data.message)
      router.push("/dashboard/dashboard")
    },
  },

  actions: {
    async verifyMyAccount({ commit }) {
      let emailRegEx = /\S+@\S+\.\S+/

      const options = {
        url: "https://dev.trustpaddi.com/api/v1/resend-verification-email",
        method: "POST",
        data: {
          email: this.state.verifyAccount.credential.email,
          token: Vue.prototype.$cookies.get("PaddiData").access_token,
        },
      }

      this.state.verifyAccount.loading = true

      if (emailRegEx.test(this.state.verifyAccount.credential.email)) {
        try {
          const response = await Vue.prototype.$axios(options)
          commit("verifyMyAccount", response)
          this.state.verifyAccount.loading = false
        } catch (error) {
          console.log(error)
          this.state.verifyAccount.loading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-exclamation-triangle"></i>`,
            border: "rgb(255, 71, 87)",
            position: "top-right",
            title: "Error !!!",
            text: `Sign in error. Check your details the try again.`,
          })
        }
      } else {
        this.state.verifyAccount.loading = false
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
