<template>
  <div id="scroll-area">
    <smooth-scrollbar :options="{ damping: 0.05 }">
      <Head />
      <!-- <Read_more /> -->
      <!-- <Introducing_trustpaddi /> -->
      <!-- <About /> -->
      <!-- <What_escrow /> -->
      <!-- <How_it_works /> -->
      <!-- <Who_can_use /> -->
      <!-- <Why_trustpaddy /> -->
      <!-- <Testimonials /> -->
      <!-- <Better_safe /> -->
      <!-- <Footer /> -->
    </smooth-scrollbar>
  </div>
</template>

<script>
import Head from "./components/Head.vue";
// import Read_more from "../components/home/Read_more.vue";
// import Introducing_trustpaddi from "../components/home/Introducing_trustpaddi.vue";
// import About from "../components/home/About.vue";
// import What_escrow from "../components/home/What_escrow.vue";
// import How_it_works from "../components/home/How_it_works.vue";
// import Who_can_use from "../components/home/Who_can_use.vue";
// import Why_trustpaddy from "../components/home/Why_trustpaddi.vue";
// import Testimonials from "../components/home/Testimonials.vue";
// import Better_safe from "../components/app_components/Better_safe.vue";
// import Footer from "../components/Footer.vue";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Home",
  },
  components: {
    Head,
    // Read_more,
    // Introducing_trustpaddi,
    // About,
    // What_escrow,
    // How_it_works,
    // Who_can_use,
    // Why_trustpaddy,
    // Testimonials,
    // Better_safe,
    // Footer,
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
/* width */
.hide::-webkit-scrollbar {
  width: 0px;
}

.hide_overlay {
  z-index: 0 !important;
}
</style>
