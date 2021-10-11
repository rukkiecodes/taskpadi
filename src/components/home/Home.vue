<template>
  <v-container fluid class="pa-0">
    <Head />
    <Introducing />
    <HowItWorks />
    <WhoCanUse />
    <BenefitsOfTrustPaddi />
    <Testimonials />
    <BetterSafe class="mt-16" />
    <Footer class="mt-16" />
  </v-container>
</template>

<script>
export default {
  components: {
    Head: () => import("./components/Head.vue"),
    Introducing: () => import("./components/Introducing.vue"),
    HowItWorks: () => import("./components/HowItWorks.vue"),
    WhoCanUse: () => import("./components/WhoCanUse.vue"),
    BenefitsOfTrustPaddi: () => import("./components/benefitsOfTrustPaddi.vue"),
    Testimonials: () => import("./components/Testimonials.vue"),
    BetterSafe: () => import("../app components/BetterSafe.vue"),
    Footer: () => import("../app components/Footer.vue"),
  },
};
</script>
