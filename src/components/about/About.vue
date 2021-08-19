<template>
  <div id="scroll-area">
    <AppNavigation />
    <smooth-scrollbar :options="{ damping: 0.05 }">
      <Safe_area />
      <Head />
      <About_trustpaddi />
      <Benefits />
      <Better_safe />
      <Footer />
    </smooth-scrollbar>
  </div>
</template>

<script>
import AppNavigation from "../nav/AppNavigation.vue"
import Safe_area from "../app_components/Safe_area.vue"
import Head from "./components/Head.vue";
import About_trustpaddi from "./components/About_trustpaddi.vue";
import Benefits from "./components/Benefits.vue";
import Better_safe from "../../components/app_components/Better_safe.vue";
import Footer from "../../components/Footer.vue";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - About",
  },
  components: {
    AppNavigation,
    Safe_area,
    Head,
    About_trustpaddi,
    Benefits,
    Better_safe,
    Footer,
  },
  created() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.classList.add("hide");
  },
};
</script>

<style>
#scroll-area {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.hide::-webkit-scrollbar {
  width: 0px;
}
</style>
