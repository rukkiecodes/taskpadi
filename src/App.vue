<template>
  <v-app>
    <AppNavigation v-show="route != '/admin'" />
    <v-main>
      <Safe_area v-show="route != '/admin'" />
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
  data: () => ({
    route: "",
  }),
  components: {
    Safe_area,
    AppNavigation,
  },
  created() {
    this.nav();
  },
  updated() {
    this.nav();
  },
  mounted() {
    this.nav();
  },
  methods: {
    nav() {
      this.route = window.location.pathname;
    },
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
