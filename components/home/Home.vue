<template>
  <div>
    <Nav />
    <Head />
    <IntroducingTrustpaddi />
    <HowItWoks />
    <!-- <WhoCanUse /> -->
    <!-- <Benefits /> -->
    <!-- <Testimony /> -->
    <!-- <BetterSafe /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
import Head from "./components/Head.vue"
import IntroducingTrustpaddi from "./components/IntroducingTrustpaddi.vue"
import HowItWoks from "./components/HowItWorks.vue"
import WhoCanUse from "./components/WhoCanUse.vue"
import Benefits from "./components/Benefits.vue"
import Testimony from "./components/Testimony.vue"
import BetterSafe from "./components/BetterSafe.vue"
import Footer from "./components/Footer.vue"
export default {
  name: "HomeComponent",

  components: {
    Nav,
    Head,
    IntroducingTrustpaddi,
    HowItWoks,
    WhoCanUse,
    Benefits,
    Testimony,
    BetterSafe,
    Footer
  }
};
</script>
