<template>
  <v-app id="paddi_app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    route: "",
  }),
  mounted() {
    this.nav();
  },
  methods: {
    nav() {
      this.route = window.location.pathname;
      console.log(this.route);
    },
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
