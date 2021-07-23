<template>
  <div>
    <v-container>
      <App_bar />
      <Drawer />
      <Faq />
    </v-container>
    <Footer />
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Faq from "../components/home/components/faq.vue";
import Footer from "../components/Footer.vue";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Faq",
  },
  components: {
    App_bar,
    Drawer,
    Faq,
    Footer,
  },
};
</script>