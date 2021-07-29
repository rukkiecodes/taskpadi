<template>
  <div id="scroll-area">
    <App_bar />
    <Drawer />
    <smooth-scrollbar :options="{ damping: 0.06 }">
      <About />
    </smooth-scrollbar>
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import About from "../components/about/About.vue";
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