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

<style scoped>
#paddi_app {
  background: #eff1ff;
}
</style>
