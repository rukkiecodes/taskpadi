<template>
  <v-container fluid class="pa-0">
    <Head />
    <IntroducingTrustPaddi class="py-16 mt-16" />
    <BenefitsOfTrustPaddi class="py-16 my-16" />
    <BetterSafe class="py-16 ma-0" />
  </v-container>
</template>

<script>
export default {
  components: {
    Head: () => import("./components/Head.vue"),
    IntroducingTrustPaddi: () => import("./components/IntroducingTrustPaddi.vue"),
    BenefitsOfTrustPaddi: () => import("./components/BenefitsOfTrustPaddi.vue"),
    BetterSafe: () => import("../app components/BetterSafe.vue"),
  }
}
</script>