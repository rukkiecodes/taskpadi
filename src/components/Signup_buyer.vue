<template>
  <v-container class="signup pa-0">
    <div class="hero">
      <img
        :src="phone"
        class="phone"
        ref="phone"
      >

      <div
        ref="social"
        class="social"
      >
        <p>Follow us</p>

        <div class="buttons">
          <v-btn
            icon
            depressed
            class="button"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            icon
            depressed
            class="button mx-5"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            depressed
            class="button"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Form -->
    <div
      ref="form"
      class="form"
    >
      <div class="head">
        <img
          :src="logo"
          class="logo mb-10"
        />
        <p class="text text-h3">Sign up</p>
        <p class="small_text text-body-2 mt-n2">Enter details to sign up</p>

        <div class="inputs">
          <div class="input mb-3 rounded-lg">
            <input
              type="text"
              class="rounded-lg"
              placeholder="Full name"
            >
          </div>
          <div class="input mb-3 rounded-lg">
            <input
              type="email"
              class="rounded-lg"
              placeholder="E-mail"
            >
          </div>
          <div class="input phone_input mb-3 rounded-lg">
            <vue-country-code
              @onSelect="onSelect"
              :preferredCountries="['vn', 'us', 'gb']"
              :enabledCountryCode="true"
              class="country_code"
            />
            <input
              class="phone_number"
              type="number"
              placeholder="Phone number"
            >
          </div>
          <div class="input password mb-3 rounded-lg">
            <input
              :type="password_type"
              placeholder="Password"
              class="rounded-lg"
            >
            <v-btn
              class="icon"
              icon
              @click="toggle_password_type"
            >
              <v-icon v-show="password_type == 'password'">mdi-eye-outline</v-icon>
              <v-icon v-show="password_type !== 'password'">mdi-eye-off-outline</v-icon>
            </v-btn>
          </div>

          <div class="other_signup mb-3">
            <router-link class="text-caption" to="/signup_seller">Register as a seller</router-link>
          </div>

          <v-btn
            depressed
            class="submit_button rounded-lg mb-3 text-button"
            block
          >
            Sign Up
          </v-btn>

          <div class="signup_route mb-0">
            <p class="text-caption">Already have an account? <router-link to="/signin">Sign In</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    phone: require("../assets/trust/phone1.png"),
    logo: require("../assets/paddi.png"),
    items: ['I am a business seller', 'I am a business buyer'],
    password_type: "password"
  }),
  methods: {
    onSelect ({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode);
    },

    toggle_password_type () {
      if (this.password_type == "password") {
        this.password_type = "text"
      } else {
        this.password_type = "password"
      }
    },
  },

  mounted () {
    console.log("width: ",window.innerWidth)
    console.log("height: ",window.innerHeight)
  }
}
</script>

<style scoped>
@import url(../assets/styles/auth.css);
@import url(../assets/icon/css/materialdesignicons.min.css);

.raise_button {
  background: #4169e2;
  transform: translate(4px, -4px);
  box-shadow: 12px 12px 36px #d1d1d1, -12px -12px 36px #ffffff;
  color: #fff !important;
}
</style>