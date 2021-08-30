<template>
  <v-app>
    <AppBar />
    <Drawer />
    <v-main class="deep-purple lighten-5">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "../../components/dashboard/navigation/AppBar.vue";
import Drawer from "../../components/dashboard/navigation/Drawer.vue";
export default {
  name: "Dashboard",
  components: {
    AppBar,
    Drawer,
  },
};
</script>

<style>
@import url(../../assets/icon/css/materialdesignicons.min.css);
</style>