<template>
  <div class="Good_and_prodict_buyer">
    <App_bar />
    <Drawer />
    <Buyer_roles />
    <Snackbar/>
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Buyer_roles from "../components/buyer_roles/Buyer_roles.vue";
import Snackbar from "../components/Snackbar.vue"
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Buyer_roles,
    Snackbar
  },
};
</script>

<style>
</style>