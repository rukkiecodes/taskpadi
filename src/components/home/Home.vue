<template>
  <div id="scroll-area">
    <AppNavigation />
    <smooth-scrollbar :options="{ damping: 0.05 }">
      <Safe_area />
      <Head />
      <Read_more />
      <Introducing_trustpaddi />
      <About />
      <What_escrow />
      <How_it_works />
      <Who_can_use />
      <Why_trustpaddy />
      <Testimonials />
      <Better_safe />
      <Footer />
    </smooth-scrollbar>
  </div>
</template>

<script>
import Safe_area from "../app_components/Safe_area.vue"
import AppNavigation from "../nav/AppNavigation.vue";
import Head from "./components/Head.vue";
import Read_more from "./components/Read_more.vue";
import Introducing_trustpaddi from "./components/Introducing_trustpaddi.vue";
import About from "./components/About.vue";
import What_escrow from "./components/What_escrow.vue";
import How_it_works from "./components/How_it_works.vue";
import Who_can_use from "./components/Who_can_use.vue";
import Why_trustpaddy from "./components/Why_trustpaddi.vue";
import Testimonials from "./components/Testimonials.vue";
import Better_safe from "../app_components/Better_safe.vue";
import Footer from "../Footer.vue";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Home",
  },
  components: {
    Safe_area,
    AppNavigation,
    Head,
    Read_more,
    Introducing_trustpaddi,
    About,
    What_escrow,
    How_it_works,
    Who_can_use,
    Why_trustpaddy,
    Testimonials,
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

.hide_overlay {
  z-index: 0 !important;
}
</style>
