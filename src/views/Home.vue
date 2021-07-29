<template>
  <div id="scroll-area">
    <App_bar />
    <Drawer />
    <smooth-scrollbar :options="{ damping: 0.06 }">
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
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Head from "../components/home/Head.vue";
import Read_more from "../components/home/Read_more.vue";
import Introducing_trustpaddi from "../components/home/Introducing_trustpaddi.vue";
import About from "../components/home/About.vue";
import What_escrow from "../components/home/What_escrow.vue";
import How_it_works from "../components/home/How_it_works.vue";
import Who_can_use from "../components/home/Who_can_use.vue";
import Why_trustpaddy from "../components/home/Why_trustpaddi.vue";
import Testimonials from "../components/home/Testimonials.vue";
import Better_safe from "../components/app_components/Better_safe.vue";
import Footer from "../components/Footer.vue";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Home",
  },
  components: {
    App_bar,
    Drawer,
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
.hide {
}
/* width */
.hide::-webkit-scrollbar {
  width: 0px;
}
/* Track */
.hide::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
/* Handle */
.hide::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
}
/* Handle on hover */
.hide::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}

.hide_overlay {
  z-index: 0 !important;
}
</style>
