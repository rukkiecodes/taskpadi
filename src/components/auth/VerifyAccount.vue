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
        <h1>Forgot your password?</h1>
        <p>
          If you don't have an account<br />You can
          <router-link to="/signup">Register here!</router-link>
        </p>
      </div>
      <vs-card class="formCard" type="1">
        <template #text>
          <div class="center content-inputs">
            <vs-input
              v-model="verifyAccount.credential.email"
              placeholder="Email"
              type="email"
            >
              <template #icon>
                <i class="las la-at" style="font-size: 1.2rem"></i>
              </template>
            </vs-input>
          </div>
          <div class="center authButtonContainer">
            <vs-button
              class="authButton"
              size="large"
              @click="verifyMyAccount"
              :loading="verifyAccount.loading"
              block
              color="#6E14EC"
              >Verify account</vs-button
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
    ...mapActions(["verifyMyAccount"]),
  },

  computed: {
    ...mapState(["verifyAccount"]),
  },
}
</script>

<style scoped>
@import url(./assets/auth.css);
</style>
