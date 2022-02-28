<template>
  <v-container fluid class="auth ma-0 pa-0">
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
              Verify your account
            </span>
          </v-col>
          <v-col cols="12" class="mt-8">
            <vs-input
              block
              type="email"
              label="Email"
              v-model="verifyAccount.credential.email"
            />

            <v-row class="mt-2" justify="space-between" align="center">
              <v-col cols="12">
                <vs-button
                  block
                  color="#6E14EC"
                  class="authButton"
                  @click="verifyMyAccount"
                  :loading="verifyAccount.loading"
                  >Verify account</vs-button
                >
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
    ...mapActions(["verifyMyAccount"]),
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
    ...mapState(["verifyAccount"]),
  },
}
</script>

<style scoped>
@import url(./assets/auth.css);
</style>
