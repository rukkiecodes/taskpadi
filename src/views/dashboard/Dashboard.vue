<template>
  <v-app class="dashboardColor">
    <AppBar />
    <Drawer />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
import AppBar from "../../components/dashboard/navigation/AppBar.vue"
import Drawer from "../../components/dashboard/navigation/Drawer.vue"
export default {
  name: "Dashboard",
  components: {
    AppBar,
    Drawer,
  },
}
</script>

<style>
@import url(../../assets/icon/css/materialdesignicons.min.css);
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.dashboardColor {
  background: #eff0f5 !important
}
</style>
