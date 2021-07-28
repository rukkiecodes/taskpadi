<template>
  <v-container class="about">
    <App_bar />
    <Drawer />
    <Safe_area />
    <About />
  </v-container>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import About from "../components/about/About.vue";
import Safe_area from "../components/app_components/Safe_area.vue"
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - About",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  components: {
    App_bar,
    Drawer,
    About,
    Safe_area
  },
};
</script>