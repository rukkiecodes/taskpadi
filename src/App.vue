<template>
  <v-app id="paddi_app">
    <AppNavigation v-show="route != '/admin'" />
    <v-main
      :class="{
        white: route == '/',
        light_blue: route == '/admin',
        light_blue: route == '/admin/menu',
        light_blue: route == '/admin/goods_products',
        light_blue: route == '/admin/crypto',
        light_blue: route == '/admin/services',
        light_blue: route == '/admin/withdraws',
        light_blue: route == '/admin/refunds',
      }"
    >
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
      console.log(this.route);
    },
  },
};
</script>

<style scoped>
.light_blue {
  background: #eff1ff;
}
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
