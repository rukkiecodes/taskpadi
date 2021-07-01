<template>
  <v-container class="signup pa-0">
    <div class="hero">
      <img
        :src="phone"
        class="phone"
        ref="phone"
      >
    </div>

    <!-- Form -->
    <div
      ref="form"
      class="form"
    >
    <div class="head">
        <img :src="logo" class="logo mb-10" />
        <p class="text text-h3">Sign up</p>
        <p class="small_text text-body-2 mt-n2">Enter details to sign up</p>

        <div class="inputs">
          <div class="input input_group">
            <input
              maxlength="1"
              type="text"
              placeholder="0"
            >
            <input
              maxlength="1"
              type="text"
              placeholder="0"
            >
            <input
              maxlength="1"
              type="text"
              placeholder="0"
            >
            <input
              maxlength="1"
              type="text"
              placeholder="0"
            >
            <input
              maxlength="1"
              type="text"
              placeholder="0"
            >
          </div>

          <div class="button_group mt-3">
            <v-btn
              depressed
              class="button text-button"
            >
              Verify
            </v-btn>
            <v-btn class="small_button" text>
              <v-icon class="icon">mdi-reload mdi-rotate-225</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <!-- <div class="head">
        <v-img
          :lazy-src="logo"
          :src="logo"
          class="logo"
        ></v-img>
        <p class="text">OTP</p>
        <p class="small_text">Enter OTP to continue</p>

        <div class="inputs">
          <div class="input input_group">
            <input
              maxlength="1"
              type="text"
            >
            <input
              maxlength="1"
              type="text"
            >
            <input
              maxlength="1"
              type="text"
            >
            <input
              maxlength="1"
              type="text"
            >
            <input
              maxlength="1"
              type="text"
            >
          </div>

          <div class="button_group">
            <v-btn
              depressed
              class="button"
            >
              Verify
            </v-btn>
            <v-btn class="small_button" text>
              <v-icon class="icon">mdi-reload mdi-rotate-225</v-icon>
            </v-btn>
          </div>
        </div>
      </div> -->
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
    password_type: "password",
    checkbox: true,
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
    }
  },

  mounted () {}
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