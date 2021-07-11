<template>
  <div class="custumer_crypto">
    <App_bar />
    <Drawer />
    <Custumer_crypto />
    <Snackbar />
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Custumer_crypto from "../components/custumer_crypto/Custumer_crypto.vue";
import Snackbar from "../components/Snackbar.vue";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Custumer_crypto,
    Snackbar,
  },
};
</script>

<style>
</style>