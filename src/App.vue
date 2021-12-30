<template>
  <v-app id="paddi_app">
    <Alert />
    <v-main class="white">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Alert from "./components/app components/Aleart.vue";
export default {
  name: "App",
  components: {
    Alert,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url(./assets/icon/css/materialdesignicons.min.css);
</style>
