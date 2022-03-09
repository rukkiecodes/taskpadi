<template>
  <v-container fluid class="auth pa-0 ma-0">
    <v-row no-gutters>
      <v-col cols="12" class="hidden-sm-and-up">
        <v-toolbar flat dense src="../../assets/login_promo_mobile.png">
          <v-spacer />
          <vs-button color="#fff" transparent
            >Learn more <i class="las la-arrow-right ml-2"></i
          ></vs-button>
          <v-spacer />
        </v-toolbar>
      </v-col>
      <v-col cols="12" sm="4" class="pa-10 px-4 pa-lg-10">
        <v-row>
          <v-col cols="12">
            <div class="logo">
              <v-avatar size="40" tile>
                <img src="../../assets/paddi.png" />
              </v-avatar>
              <span
                class="ml-2 font-weight-bold text-body-2 grey--text text--darken-3"
                >Trustpaddi</span
              >
            </div>
          </v-col>
          <v-col cols="12">
            <span
              class="text text-h4 text-sm-h6 font-weight-bold grey--text text--darken-4"
            >
              Log in to your account
            </span>
          </v-col>
          <v-col cols="12" class="mt-8">
            <vs-input
              block
              type="email"
              placeholder="Email Address"
              v-model="signin.credential.email"
            />

            <vs-input
              block
              icon-after
              class="mt-5"
              type="password"
              placeholder="Password"
              :progress="getProgress"
              @keypress.enter="signinUser"
              v-model="signin.credential.password"
              :visiblePassword="hasVisiblePassword"
              @click-icon="hasVisiblePassword = !hasVisiblePassword"
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

            <v-row class="mt-2" justify="space-between" align="center">
              <v-col cols="12">
                <router-link
                  to="/forgotPassword"
                  class="text-body-2 text-decoration-none ml-2"
                  >Forgot password</router-link
                >
              </v-col>
              <v-col cols="12" md="4">
                <vs-button
                  block
                  color="#6E14EC"
                  @click="signinUser"
                  :loading="signin.loading"
                >
                  Login
                </vs-button>
              </v-col>
              <v-col cols="12" md="8" class="text-lg-right">
                <span class="text-body-2 text-md-caption text-lg-body-2 ml-2"
                  >Don't have an account?
                  <router-link class="text-decoration-none font-weight-bold" to="/signup"
                    >Sign Up</router-link
                  >
                </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="8" class="rightSide hidden-xs-only">
        <img class="img1" src="../../assets/img1.png" alt="" />
        <img class="img2" src="../../assets/img2.png" alt="" />
        <img class="img3" src="../../assets/img3.png" alt="" />
        <v-row class="pa-10 rightSideText">
          <v-col cols="12">
            <p class="text-h4 font-weight-bold white--text">
              Enjoy safer Transactions, and faster deliveries with Trustpaddi
            </p>
          </v-col>
          <v-col cols="12" class="pt-0">
            <p class="white--text">
              TrustPaddi is a payment solution built with escrow protection,
              which ensures safer and scam free transactions between online
              vendors, service providers and individuals online.
            </p>
          </v-col>
          <v-col cols="12" class="pt-0">
            <vs-button color="#6E14EC">Learn more</vs-button>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    hasVisiblePassword: false,
  }),

  methods: {
    ...mapActions(["signinUser"]),
  },

  mounted() {
    this.$nextTick(() => {
      const html = document.querySelector("html")
      html.style.overflowY = "hidden"
    })
  },

  beforeDestroy() {
    const html = document.querySelector("html")
      html.style.overflowY = ""
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
