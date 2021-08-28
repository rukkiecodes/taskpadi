<template>
  <v-app id="paddi_app">
    <v-main class="deep-purple lighten-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#paddi_app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
}
@import url(./assets/icon/css/materialdesignicons.min.css);
</style>
