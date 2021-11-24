<template>
  <v-container fluid class="pa-0">
    <Head />
    <!-- <Introducing />
    <HowItWorks />
    <WhoCanUse />
    <BenefitsOfTrustPaddi />
    <Testimonials />
    <BetterSafe class="mt-16" />
    <Footer class="mt-16" /> -->
    <v-fab-transition>
      <v-btn
        fab
        right
        fixed
        bottom
        color="white"
        elevation="12"
        v-show="showBackToTop"
        @click="$vuetify.goTo(target, options)"
      >
        <v-icon color="deep-purple accent-4">mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    type: "number",
    number: 0,
    duration: 1000,
    offset: 0,
    easing: "easeInOutCubic",
    showBackToTop: false,
  }),
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
  mounted() {
    this.$nextTick(() => {
      document.addEventListener("scroll", () => {
        if (window.scrollY >= 500) {
          this.showBackToTop = true
        } else {
          this.showBackToTop = false
        }
      })
    })
  },
  computed: {
    target() {
      const value = this[this.type]
      if (!isNaN(value)) return Number(value)
      else return value
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    },
  },
}
</script>
