<template>
  <v-container class="signup">
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
        <v-img
          :lazy-src="logo"
          :src="logo"
          class="logo"
        ></v-img>
        <p class="text">Sign up</p>
        <p class="small_text">Enter details to sign up</p>

        <div class="inputs">
          <div class="input">
            <input
              type="text"
              placeholder="Full name"
            >
          </div>
          <div class="input">
            <input
              type="email"
              placeholder="E-mail"
            >
          </div>
          <div class="input phone_input">
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
          <div class="input password">
            <input
              :type="password_type"
              placeholder="Password"
              @focus="raise_password_visibility"
              @blur="drop_password_visibility"
            >
            <v-btn
              class="icon"
              :class="{ 'raise_button': password_visibility }"
              icon
              @click="toggle_password_type"
            >
              <v-icon v-show="password_type == 'password'">mdi-eye-outline</v-icon>
              <v-icon v-show="password_type !== 'password'">mdi-eye-off-outline</v-icon>
            </v-btn>
          </div>
          <div class="input">
            <select>
              <option
                v-for="(item, index) in items"
                :key="index"
                :value="item"
              >{{ item }}</option>
            </select>
          </div>

          <div class="other_signup">
            <router-link to="/">Register as a seller</router-link>
          </div>

          <v-btn
            depressed
            class="submit_button"
          >
            Sign Up
          </v-btn>

          <div class="signup_route">
            <p>Already have an account? <router-link to="/signin">Sign In</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </v-container>
</template>

<script>
import gsap from "gsap"
export default {
  data: () => ({
    phone: require("../assets/trust/phone1.png"),
    logo: require("../assets/paddi.png"),
    items: ['I am a business seller', 'I am a business buyer'],
    password_type: "password",
    password_visibility: false
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

    raise_password_visibility () {
      this.password_visibility = true
    },

    drop_password_visibility () {
      this.password_visibility = false
    }
  },

  mounted () {
    this.$nextTick(() => {
      const tl = gsap.timeline();
      const phone = this.$refs.phone
      const social = this.$refs.social
      const form = this.$refs.form
      tl.to(phone, {
        delay: 1,
        duration: .5,
        x: 10,
        opacity: 1
      })
      tl.to(social, {
        delay: 0,
        duration: .5,
        y: -10,
        opacity: 1
      })
      tl.to(form, {
        delay: 0,
        duration: .5,
        x: 10,
        opacity: 1
      })
    })
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