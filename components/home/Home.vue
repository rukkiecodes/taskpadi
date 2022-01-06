<template>
  <div>
    <Nav />
    <Head />
    <IntroducingTrustpaddi />
    <HowItWoks />
    <WhoCanUse />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
import Head from "./components/Head.vue"
import IntroducingTrustpaddi from "./components/IntroducingTrustpaddi.vue"
import HowItWoks from "./components/HowItWorks.vue"
import WhoCanUse from "./components/WhoCanUse.vue"
export default {
  name: "HomeComponent",

  components: {
    Nav,
    Head,
    IntroducingTrustpaddi,
    HowItWoks,
    WhoCanUse
  }
};
</script>
