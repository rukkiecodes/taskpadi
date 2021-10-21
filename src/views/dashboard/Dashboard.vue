<template>
  <v-app class="deep-purple lighten-5">
    <AppBar />
    <Drawer />
    <RightDrawer />
    <router-view />
  </v-app>
</template>

<script>
import { mapActions } from "vuex"
import AppBar from "../../components/dashboard/navigation/AppBar.vue"
import Drawer from "../../components/dashboard/navigation/Drawer.vue"
import RightDrawer from "../../components/dashboard/navigation/RightDrawer.vue"
export default {
  name: "Dashboard",
  components: {
    AppBar,
    Drawer,
    RightDrawer,
  },
}
</script>

<style>
@import url(../../assets/icon/css/materialdesignicons.min.css);
</style>
