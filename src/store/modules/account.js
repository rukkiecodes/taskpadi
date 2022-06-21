import Vue from "vue"
import axios from "axios"
import router from "../../router/index"

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
            // console.log('getProfile: ', response)
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
            console.log('updateProfile: ', response)
            // if (response.data.success == true) {
            //     Vue.prototype.$vs.notification({
            //         icon: `<i class="las la-user"></i>`,
            //         border: "#46C93A",
            //         position: "top-right",
            //         title: "Yippee!!!",
            //         text: "Profile updated successfully",
            //     })
            // }
        },
    },

    actions: {
        async getProfile ({ commit }) {
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let email = Vue.prototype.$cookies.get("PaddiData").user.email

            console.log(token)

            await axios({
                method: 'get',
                url: `https://trustpaddi.herokuapp.com/auth/profile/${email}`,
                headers: { 'Authorization': `Bearer ${token}` }
            }).then(user => {
                commit("getProfile", user)
            }).catch(err => console.log('error: ', err))
        },

        async getStates ({ commit }) {
            const response = await axios.get(
                "https://trustpaddi.herokuapp.com/states"
            )
            commit("getStates", response)
        },

        async updateProfile ({ commit, dispatch }) {
            this.state.account.saveLoading = true
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let email = Vue.prototype.$cookies.get("PaddiData").user.email
            let input = this.state.account.credential

            let user = await axios({
                method: 'post',
                url: `https://trustpaddi.herokuapp.com/auth/updateProfile/${email}`,
                headers: { 'Authorization': `Bearer ${token}` },
                body: {
                    firstname: input.firstname,
                    lastname: input.lastname,
                    phone: input.phone,
                    country: input.country,
                    state: input.state,
                    lga: input.lga,
                    address: input.address,
                }
            })
            return dispatch("getProfile").then(() => {
                commit("updateProfile", user)
                this.state.account.saveLoading = false
            })
        },

        setImage ({ commit, dispatch }, file) {
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let email = Vue.prototype.$cookies.get("PaddiData").user.email

            let myHeaders = new Headers()
            myHeaders.append("Accept", "application/json")
            myHeaders.append('Authorization', `Bearer ${token}`)

            let formdata = new FormData()
            formdata.append("email", email)
            formdata.append("avatar", file)

            let requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
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