<template>
  <div class="interactive_form">
    <App_bar />
    <Drawer />
    <Interactive_form />
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
import Interactive_form from "../components/interactive_form/Interactive_form.vue";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Interactive form",
  },
  components: {
    App_bar,
    Drawer,
    Interactive_form,
  },
};
</script>

<style>
</style>