import router from "../../router"
import axios from "axios"
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
      if (response.data.success == true) router.push("/")
      else router.push("/signup")
    },
  },

  actions: {
    async signupUser({ commit }) {
      let emailRegEx = /\S+@\S+\.\S+/

      this.state.signup.loading = true
      let input = this.state.signup.credential

      if (
        input.firstname != "" &&
        input.lastname != "" &&
        emailRegEx.test(input.email) &&
        input.password != "" &&
        input.password === input.password_confirmation
      ) {
        axios
          .post("https://trustpaddi.herokuapp.com/auth/signup", {
            firstname: input.firstname,
            lastname: input.lastname,
            email: input.email,
            password: input.password,
            referral_code: input.referral_code,
          })
          .then((user) => {
            commit("signupUser", user)
            this.state.signup.loading = false
          })
          .catch((error) => {
            this.state.signup.loading = false
            console.log("error signing up: ", error)
          })
      } else {
        this.state.signup.loading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Error!!!",
          text: `Please complete the form and try again`,
        })
      }
    },
  },
}
