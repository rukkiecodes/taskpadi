<template>
  <v-container>
    <Head class="py-16" />
    <Info class="mt-16" />
    <Introduction class="mt-16 py-16" />
    <AboutTrustpaddi class="mt-16" />
    <WhatIsEscrow class="mt-16" />
    <HowItWorks class="mt-16" />
    <WhoCanUseTrustpaddi class="mt-16" />
    <WhyTrustPaddi class="mt-16" />
    <Testimonials class="mt-16" />
    <BetterSafe class="mt-16 py-16" />
  </v-container>
</template>

<script>
export default {
  components: {
    Head: () => import("./components/head/Head.vue"),
    Info: () => import("./components/Info.vue"),
    Introduction: () => import("./components/Introduction.vue"),
    AboutTrustpaddi: () => import("./components/AboutTrustpaddi.vue"),
    WhatIsEscrow: () => import("./components/WhatIsEscrow.vue"),
    HowItWorks: () => import("./components/how it works/HowItWorks.vue"),
    WhoCanUseTrustpaddi: () => import("./components/WhoCanUseTrustpaddi.vue"),
    WhyTrustPaddi: () => import("./components/WhyTrustPaddi.vue"),
    Testimonials: () => import("./components/Testimonials.vue"),
    BetterSafe: () => import("../app components/BetterSafe.vue"),
  },
};
</script>
