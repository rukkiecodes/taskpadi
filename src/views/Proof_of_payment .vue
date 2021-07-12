<template>
  <div class="Good_and_prodict_buyer">
    <App_bar />
    <Drawer />
    <Proof_of_payment  />
    <Snackbar/>
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Proof_of_payment  from "../components/proof_of_payment/Proof_of_payment .vue";
import Snackbar from "../components/Snackbar.vue"
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Proof_of_payment ,
    Snackbar
  },
};
</script>

<style>
</style>