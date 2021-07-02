<template>
  <v-container class="about">
    <App_bar />
    <Drawer />
    <h1>This is an about page</h1>
  </v-container>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
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
  },
};
</script>