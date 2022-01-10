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
import Head from "./components/Head.vue"
import Introducing from "./components/Introducing.vue"
import HowItWorks from "./components/HowItWorks.vue"
import WhoCanUse from "./components/WhoCanUse.vue"
import BenefitsOfTrustPaddi from "./components/benefitsOfTrustPaddi.vue"
import Testimonials from "./components/Testimonials.vue"
import BetterSafe from "../app components/BetterSafe.vue"
import Footer from "../app components/Footer.vue"
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
    Head,
    Introducing,
    HowItWorks,
    WhoCanUse,
    BenefitsOfTrustPaddi,
    Testimonials,
    BetterSafe,
    Footer
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
