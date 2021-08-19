<template>
  <v-app id="paddi_app">
    <Dash_nav />
    <router-view />
  </v-app>
</template>

<script>
export default {
  components: {
    Dash_nav: () => import("../../components/dash_nav/Dash_nav.vue"),
  },
};
</script>

<style scoped>
#paddi_app {
  background: #eff1ff;
}
</style>