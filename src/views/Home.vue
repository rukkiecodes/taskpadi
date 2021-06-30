<template>
  <div id="scroll-area">
    <App_bar />
    <Drawer />
    <smooth-scrollbar>
      <Head />
      <Section2 />
      <About />
      <What_escrow />
      <How_it_works />
      <Who_can_use />
      <Testimonials />
      <Footer />
    </smooth-scrollbar>
  </div>
</template>
Footer
<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Head from "../components/home/Head.vue";
import Section2 from "../components/home/Section2.vue";
import About from "../components/home/About.vue";
import What_escrow from "../components/home/What_escrow.vue";
import How_it_works from "../components/home/How_it_works.vue";
import Who_can_use from "../components/home/Who_can_use.vue";
import Testimonials from "../components/home/Testimonials.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    App_bar,
    Drawer,
    Head,
    Section2,
    About,
    What_escrow,
    How_it_works,
    Who_can_use,
    Testimonials,
    Footer,
  },
};
</script>

<style>
#scroll-area {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
