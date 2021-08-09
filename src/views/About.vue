<template>
  <div id="scroll-area">
    <smooth-scrollbar :options="{ damping: 0.06 }">
      <About />
    </smooth-scrollbar>
  </div>
</template>

<script>
import About from "../components/about/About.vue";
import { mapActions } from "vuex";
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
    About,
  },
  created() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.classList.add("hide");
  },
  mounted() {
    this.app_bar_route();
  },
  methods: {
    ...mapActions(["app_bar_route"]),
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
