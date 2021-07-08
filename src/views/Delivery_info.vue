<template>
  <div class="Delivery_info">
    <App_bar />
    <Drawer />
    <Delivery_info />
    <Snackbar/>
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Delivery_info from "../components/delivery_info/Delivery_info.vue";
import Snackbar from "../components/Snackbar.vue"
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Delivery_info,
    Snackbar
  },
};
</script>

<style>
</style>