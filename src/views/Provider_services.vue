<template>
  <div class="Good_and_prodict_buyer">
    <App_bar />
    <Drawer />
    <Provider_services />
    <Snackbar/>
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Provider_services from "../components/provider_services/Provider_services.vue";
import Snackbar from "../components/Snackbar.vue"
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Provider_services,
    Snackbar
  },
};
</script>

<style>
</style>