<template>
  <div class="auth">
    <Nav />
    <div class="splat"></div>
    <img src="./assets/images/takeOff.svg" class="takeOffCOntainer" />
    <img class="cash" src="./assets/images/cash.svg" alt="" />
    <img class="hand" src="./assets/images/hand.svg" alt="" />
    <img class="check" src="./assets/images/check.svg" alt="" />

    <div class="mainSection">
      <div class="textArea">
        <h1>Sign In and<br />Enjoy Safer Transactions</h1>
        <p>
          If you already have an account<br />You can
          <router-link to="/signup">Register here!</router-link>
        </p>
      </div>
      <vs-card class="formCard" type="1">
        <template #text>
          <div class="center content-inputs">
            <vs-input
              v-model="signin.credential.email"
              placeholder="Email"
              type="email"
            >
              <template #icon>
                <i class="las la-at" style="font-size: 1.2rem"></i>
              </template>
            </vs-input>
          </div>
          <div class="center content-inputs">
            <vs-input
              type="password"
              v-model="signin.credential.password"
              placeholder="Password"
              :progress="getProgress"
              :visiblePassword="hasVisiblePassword"
              icon-after
              @click-icon="hasVisiblePassword = !hasVisiblePassword"
              @keypress.enter="signinUser"
            >
              <template #icon>
                <i
                  v-if="!hasVisiblePassword"
                  class="las la-eye"
                  style="font-size: 1.2rem"
                ></i>
                <i
                  v-else
                  class="las la-eye-slash"
                  style="font-size: 1.2rem"
                ></i>
              </template>

              <template v-if="getProgress >= 100" #message-success>
                Secure password
              </template>
            </vs-input>
          </div>
          <div class="forgotPassword">
            <router-link class="font-weight-bold" to="/forgotPassword">Forgot password</router-link>
          </div>
          <div class="center authButtonContainer">
            <vs-button
              class="authButton"
              size="large"
              @click="signinUser"
              :loading="signin.loading"
              block
              color="#6E14EC"
              >Sign In</vs-button
            >
          </div>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
// @ts-nocheck
import Nav from "./Nav.vue"
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    hasVisiblePassword: false,
  }),

  components: {
    Nav,
  },

  methods: {
    ...mapActions(["signinUser"]),
  },

  computed: {
    getProgress() {
      let progress = 0

      // at least one number

      if (/\d/.test(this.signin.credential.password)) {
        progress += 20
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.signin.credential.password)) {
        progress += 20
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.signin.credential.password)) {
        progress += 20
      }

      // more than 5 digits

      if (this.signin.credential.password.length >= 6) {
        progress += 20
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.signin.credential.password)) {
        progress += 20
      }

      return progress
    },

    ...mapState(["signin"]),
  },
}
</script>

<style scoped>
@import url(./assets/auth.css);
</style>
