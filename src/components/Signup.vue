<template>
  <div class="signup">
    <div class="hero">
      <v-img
        :lazy-src="phone"
        :src="phone"
      ></v-img>

      <div class="social">
        <p>Sign up with</p>

        <div class="buttons">
          <v-btn
            icon
            unelevated
            class="button"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            icon
            unelevated
            class="button mx-5"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            unelevated
            class="button"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="form">
      <div class="head">
        <q-img
          :src="logo"
          spinner-color="white"
          class="logo"
        />
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
              type="text"
              placeholder="E-mail"
            >
          </div>
          <div class="input">
            <!-- <input
              type="text"
              placeholder="E-mail"
            > -->
            <vue-country-code
              @onSelect="onSelect"
              :preferredCountries="['vn', 'us', 'gb']"
            >
            </vue-country-code>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    phone: require("../assets/trust/phone1.png"),
    logo: require("../assets/paddi.png")
  }),
  methods: {
     onSelect({name, iso2, dialCode}) {
       console.log(name, iso2, dialCode);
     },
  },
}
</script>

<style scoped>
@import url(../assets/styles/signup.css);
@import url(../assets/icon/css/materialdesignicons.min.css);
</style>