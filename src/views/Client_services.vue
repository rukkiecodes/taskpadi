<template>
  <div class="Good_and_prodict_buyer">
    <App_bar />
    <Drawer />
    <Client_services />
    <Snackbar/>
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Client_services from "../components/client_services/Client_services.vue";
import Snackbar from "../components/Snackbar.vue"
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Client_services,
    Snackbar
  },
};
</script>

<style>
</style>