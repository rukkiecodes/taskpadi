<template>
  <div>
    <App_bar />
    <Drawer />
    <Head />
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue"
import Drawer from "../components/nav/Drawer.vue"
import Head from "../components/home/Head.vue"
export default {
  components: {
    App_bar,
    Drawer,
    Head
  }
}
</script>
