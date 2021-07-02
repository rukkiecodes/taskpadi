<template>
  <v-container>
    <App_bar />
    <Drawer />
  </v-container>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue";
import Drawer from "../components/nav/Drawer.vue";
export default {
  components: {
    App_bar,
    Drawer
  }
}
</script>