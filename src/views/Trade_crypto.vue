<template>
  <div class="Trade_crypto">
    <App_bar />
    <Drawer />
    <Trade_crypto />
    <Snackbar />
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Trade_crypto from "../components/trade_crypto/Trade_crypto.vue";
import Snackbar from "../components/Snackbar.vue";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Trade_crypto,
    Snackbar,
  },
};
</script>

<style>
</style>