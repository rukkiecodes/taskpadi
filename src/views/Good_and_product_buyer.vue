<template>
  <div class="Good_and_product_buyer">
    <App_bar />
    <Drawer />
    <Good_and_product_buyer />
    <Snackbar/>
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Good_and_product_buyer from "../components/good_and_product_buyer/Good_and_product_buyer.vue";
import Snackbar from "../components/Snackbar.vue"
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Good_and_product_buyer,
    Snackbar
  },
};
</script>

<style>
</style>