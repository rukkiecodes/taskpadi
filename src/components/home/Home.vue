<template>
  <v-container fluid class="pa-0">
    <Head />
    <Introducing />
    <HowItWorks />
    <WhoCanUse />
    <WhyTrustPaddi />
    <Testimonials />
  </v-container>
</template>

<script>
export default {
  components: {
    Head: () => import("./components/Head.vue"),
    Introducing: () => import("./components/Introducing.vue"),
    HowItWorks: () => import("./components/HowItWorks.vue"),
    WhoCanUse: () => import("./components/WhoCanUse.vue"),
    WhyTrustPaddi: () => import("./components/WhyTrustPaddi.vue"),
    Testimonials: () => import("./components/Testimonials.vue"),
  },
};
</script>
