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
      let emailRegEx = /\S+@\S+\.\S+/

      this.state.signup.loading = true
      let input = this.state.signup.credential

      // var myHeaders = new Headers()
      // myHeaders.append("Accept", "application/json")

      var formdata = new FormData()
      formdata.append("firstname", "Terry")
      formdata.append("lastname", "Friday")
      formdata.append("email", "rukkiecodes6@gmail.com")
      formdata.append("password", "amagboro")
      formdata.append("password_confirmation", "amagboro")
      formdata.append("referral_code", "1")

      var requestOptions = {
        method: "POST",
        // headers: myHeaders,
        body: formdata,
      }

      fetch("https://dev.trustpaddi.com/api/v1/register", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          this.state.signup.loading = false
        })
        .catch((error) => {
          console.log("error", error)
          this.state.signup.loading = false
        })

      // if (
      //   input.firstname != "" &&
      //   input.lastname != "" &&
      //   emailRegEx.test(input.email) &&
      //   input.password != "" &&
      //   input.password === input.password_confirmation
      // ) {
      //   // try {
      //   //   const options = {
      //   //     url: `${location.origin}/register`,
      //   //     method: "POST",
      //   //     data: this.state.signup.credential,
      //   //   }
      //   //   const response = await Vue.prototype.$axios(options)
      //   //   commit("signupUser", response)
      //   //   this.state.signup.loading = false
      //   // } catch (error) {
      //   //   console.log("Error with try:", error)
      //   //   this.state.signup.loading = false
      //   //   Vue.prototype.$vs.notification({
      //   //     icon: `<i class="las la-exclamation-triangle"></i>`,
      //   //     border: "rgb(255, 71, 87)",
      //   //     position: "top-right",
      //   //     title: "Error !!!",
      //   //     text: error,
      //   //   })
      //   // }
      // } else {
      //   this.state.signup.loading = false
      //   Vue.prototype.$vs.notification({
      //     icon: `<i class="las la-exclamation-triangle"></i>`,
      //     border: "rgb(255, 71, 87)",
      //     position: "top-right",
      //     title: "Error !!!",
      //     text: `Please complete the form and try again`,
      //   })
      // }
    },
  },
}
