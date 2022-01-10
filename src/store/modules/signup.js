import router from "../../router"
import axios from "axios"
import Vue from "vue"

export default {
  state: {
    credential: {
      name: "",
      email: "",
      password: "",
    },

    loading: false,
  },

  mutations: {
    signupUser: (state, response) => {
      console.log(response)
      if (response.status == 201) {
        state.loading = false
        router.push("/signin")
      } else {
        state.loading = false
        router.push("/")
      }
    },
  },

  actions: {
    async signupUser({ commit }) {
      let emailRegEx = /\S+@\S+\.\S+/
      this.state.signup.loading = true
      if (
        this.state.signup.credential.name != "" &&
        emailRegEx.test(this.state.signup.credential.email) &&
        this.state.signup.credential.password != ""
      ) {
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/signup",
            this.state.signup.credential
          )
          commit("signupUser", response)
          this.state.signup.loading = false
        } catch (error) {
          console.log(error)
          this.state.signup.loading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-exclamation-triangle"></i>`,
            border: "rgb(255, 71, 87)",
            position: "top-right",
            title: "Error !!!",
            text: `This email is taken try another`,
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
