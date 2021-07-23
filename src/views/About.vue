<template>
  <div>
    <App_bar />
    <Drawer />
    <About_us />
    <App_Footer />
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import About_us from "../components/home/About.vue";
import Drawer from "../components/nav/Drawer.vue";
import App_Footer from "../components/Footer.vue";

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
    About_us,
    App_Footer,
    Drawer,
  },
};
</script>