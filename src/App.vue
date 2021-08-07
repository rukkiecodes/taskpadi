<template>
  <v-app>
    <AppNavigation />
    <v-main>
      <Safe_area />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from "./components/nav/AppNavigation.vue";
import Safe_area from "./components/app_components/Safe_area.vue";
export default {
  name: "App",
  components: {
    Safe_area,
    AppNavigation,
  },
};
</script>

<style scoped>
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
</style>
