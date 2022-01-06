<template>
  <div>
    <Nav />
    <Head />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
import Head from "./components/Head.vue"
export default {
  name: "HomeComponent",

  components: {
    Nav,
    Head
  }
};
</script>
