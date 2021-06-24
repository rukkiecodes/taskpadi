<template>
  <div class="signup">
    <div class="hero">
      <q-img
        :src="phone"
        spinner-color="white"
        class="phone"
      />

      <div class="social">
        <p>Sign up with</p>

        <div class="buttons">
          <q-btn
            unelevated
            class="button"
            color="primary"
            icon="mdi-linkedin"
          />
          <q-btn
            unelevated
            class="button q-mx-lg"
            color="primary"
            icon="mdi-facebook"
          />
          <q-btn
            unelevated
            class="button"
            color="primary"
            icon="mdi-github"
          />
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
            <input type="text" placeholder="Full name">
          </div>
          <div class="input">
            <input type="text" placeholder="E-mail">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    phone: require("../assets/trust/phone1.png"),
    logo: require("../assets/paddi.png")
  })
}
</script>

<style lang="scss" scoped>
@import "../assets/icon/css/materialdesignicons.min.css";
@import "../assets/styles/signup.scss";
</style>