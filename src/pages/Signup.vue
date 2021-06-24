<template>
  <div class="signup">
    <div class="hero">
      <q-img
      :src="src"
      spinner-color="white"
      class="phone"
    />

    <div class="social">
      <p>Sign up with</p>

      <div class="buttons">
         <q-btn class="button" color="primary" icon="mdi-linkedin" />
         <q-btn class="button" color="primary" icon="mdi-facebook" />
         <q-btn class="button" color="primary" icon="mdi-github" />
      </div>
    </div>
    </div>
    <div class="form"></div>
  </div>
</template>

<script>
export default{
  name: 'PageIndex',
  data: () => ({
    src: require("../assets/trust/phone1.png")
  })
}
</script>

<style lang="scss" scoped>
@import "../assets/icon/css/materialdesignicons.min.css";
@import "../assets/styles/signup.scss";
</style>