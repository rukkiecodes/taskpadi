<template>
  <div>
    <App_bar />
    <Drawer />
    <Head />
    <Section2 />
  </div>
</template>

<script>
import App_bar from "../components/nav/App_bar.vue"
import Drawer from "../components/nav/Drawer.vue"
import Head from "../components/home/Head.vue"
import Section2 from "../components/home/Section2.vue"
export default {
  components: {
    App_bar,
    Drawer,
    Head,
    Section2
  }
}
</script>
