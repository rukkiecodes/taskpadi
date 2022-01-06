<template>
  <div>
    <Nav />
    <Head />
    <IntroducingTrustpaddi />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
import Head from "./components/Head.vue"
import IntroducingTrustpaddi from "./components/IntroducingTrustpaddi.vue"
export default {
  name: "HomeComponent",

  components: {
    Nav,
    Head,
    IntroducingTrustpaddi
  }
};
</script>
