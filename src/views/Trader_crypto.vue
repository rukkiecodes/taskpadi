<template>
  <div class="custumer_crypto">
    <App_bar />
    <Drawer />
    <Trader_crypto />
    <Snackbar />
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Trader_crypto from "../components/trader_crypto/Trader_crypto.vue"
import Snackbar from "../components/Snackbar.vue";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Trader_crypto,
    Snackbar,
  },
};
</script>

<style>
</style>