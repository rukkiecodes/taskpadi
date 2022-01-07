<template>
  <div class="footer">
    <div class="footerContainer1">
      <div class="company">
        <p class="title">Company</p>
        <NuxtLink v-for="(route, i) in companyRoutes" :key="i" to="/">{{
          route.name
        }}</NuxtLink>
      </div>
      <div class="support">
        <p class="title">Support</p>
        <NuxtLink v-for="(route, i) in support" :key="i" to="/">{{
          route.name
        }}</NuxtLink>
      </div>
      <div class="reachUs">
        <p class="title">Reach Us</p>
        <NuxtLink v-for="(route, i) in reachUs" :key="i" to="/"
          ><i :class="route.icon"></i> {{ route.name }}</NuxtLink
        >
      </div>
      <div class="stayUpToDate">
        <p class="title">Stay up to date</p>
        <vs-input
          primary
          v-model="value2"
          class="stayUpToDateInput"
          placeholder="Your email address"
        >
          <template #icon>
            <i class="las la-paper-plane"></i>
          </template>
        </vs-input>
      </div>
    </div>

    <div class="diveider"></div>

    <div class="footerContainer2">
      <div class="section1">
        <span>© {{ new Date().getFullYear() }} TrustPaddi. All rights reserved</span>
      </div>
      <div class="section2">
        <NuxtLink to="/">Terms</NuxtLink>
        <NuxtLink to="/">Privacy</NuxtLink>
        <NuxtLink to="/">Cookies</NuxtLink>
      </div>

      <div class="section3">
        <vs-button icon color="#fff" border>
          <i class="lab la-linkedin-in"></i>
        </vs-button>
        <vs-button icon color="#fff" border>
          <i class="lab la-facebook-f"></i>
        </vs-button>
        <vs-button icon color="#fff" border>
          <i class="lab la-twitter"></i>
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ts-nocheck
export default {
  data: () => ({
    value2: "",
    companyRoutes: [
      {
        to: "/",
        name: "Testimonials",
      },
      {
        to: "/",
        name: "P2P Transaction",
      },
      {
        to: "/",
        name: "FAQs",
      },
      {
        to: "/",
        name: "Blog",
      },
      {
        to: "/",
        name: "Careers",
      },
    ],

    support: [
      {
        to: "/",
        name: "Security",
      },
      {
        to: "/",
        name: "Fee Calculator",
      },
      {
        to: "/",
        name: "Fraud Prevention",
      },
      {
        to: "/",
        name: "Report a Bug",
      },
    ],

    reachUs: [
      {
        to: "/",
        icon: "las la-envelope",
        name: "contact@trustpaddi.com",
      },
      {
        to: "/",
        icon: "las la-mobile",
        name: "+2349033275449",
      },
      {
        to: "/",
        icon: "las la-map-marker",
        name: "Lagos",
      },
    ],
  }),

  mounted() {
    this.$nextTick(() => {
      document.querySelector(".vs-input").style.width = "100%";
      document.querySelector(".vs-input").style.height = "3em";
    });
  },
};
</script>

<style scoped>
@import url(./assets/footer.css);
</style>
