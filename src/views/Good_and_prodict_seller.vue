<template>
  <div class="Good_and_prodict_seller">
    <App_bar />
    <Drawer />
    <Good_and_prodict_seller />
    <Snackbar />
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Good_and_prodict_seller from "../components/good_and_prodict_seller/Good_and_prodict_seller.vue";
import Snackbar from "../components/Snackbar.vue";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Good_and_prodict_seller,
    Snackbar,
  },
};
</script>

<style>
</style>