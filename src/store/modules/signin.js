// @ts-nocheck
import router from "../../router"
import Vue from "vue"
import axios from "axios"

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
            console.log('login response: ', response)
            state.loading = false
            Vue.prototype.$cookies.set("PaddiData", response.data)
            if (response.data.success == true) router.push("/dashboard/dashboard")
            else {
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Error!!!",
                    text: response.data.message,
                })
                router.push("/")
            }
        },
    },

    actions: {
        async signinUser ({ commit }) {
            let emailRegEx = /\S+@\S+\.\S+/
            let input = this.state.signin.credential

            if (emailRegEx.test(input.email) && input.password != "") {
                this.state.signin.loading = true

                axios
                    .post("https://trustpaddi.herokuapp.com/auth/signin", {
                        email: input.email,
                        password: input.password,
                    })
                    .then((user) => {
                        commit("signinUser", user)
                        this.state.signin.loading = false
                    })
                    .catch((error) => {
                        this.state.signin.loading = false
                        Vue.prototype.$vs.notification({
                            icon: `<i class="las la-exclamation-triangle"></i>`,
                            border: "rgb(255, 71, 87)",
                            position: "top-right",
                            title: "Error!!!",
                            text: error,
                        })
                    })
            } else {
                this.state.signin.loading = false
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Error!!!",
                    text: `Please complete the form and try again`,
                })
            }
        },

        login () {
            let user = Vue.prototype.$cookies.isKey("PaddiData")

            if (user) router.push("/dashboard/dashboard")
        }
    },
}