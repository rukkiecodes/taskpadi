<template>
  <v-app id="paddi_app">
    <Alert />
    <v-main class="deep-purple lighten-5">
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
#paddi_app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
}
@import url(./assets/icon/css/materialdesignicons.min.css);
</style>
