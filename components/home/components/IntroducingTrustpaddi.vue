<template>
  <div class="IntroducingTrustpaddi">
    <Heading
      h1="Introducing Trustpaddi"
      p="The safest & surest way to transact online"
    />

    <div class="introductoction">
      <p v-for="(text, i) in introductoction" :key="i" v-html="text" />
    </div>

    <div class="perks">
      <div v-for="(card, i) in perksCard" :key="i" class="perksCard">
        <img :src="card.img" alt="" />

        <p class="title" v-text="card.title" />
        <p class="body" v-text="card.body" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "./Heading.vue";
export default {
  data: () => ({
    introductoction: [
      `<span style="font-weight: 600">TrustPaddi</span> is Nigerians most trusted escrow/middleman platform built with the latest technology which enables safer transactions between online vendors (marketplaces, businesses etc) & individuals whether online or offline.`,

      `With TrustPaddi Cash on delivery just got better cause we provide full escrow protection for both parties and stress-free delivery options for online business owners.`,

      `Therefore, Whether you’re dealing with a real estate transaction, an online seller or a Crypto trader etc escrow is the best means to transact Securely and this is what TrustPaddi offers, Escrow Protection at it's best.`,
    ],

    perksCard: [
      {
        img: require("../../../assets/trust/home/convenient.png"),
        title: "Convenient",
        body: "TrustPaddi is convenient for both buyer and the seller.",
      },
      {
        img: require("../../../assets/trust/home/secure.png"),
        title: "Secure",
        body: "TrustPaddi ensures buyer and seller protection, and protects the interest of both parties.",
      },
      {
        img: require("../../../assets/trust/home/trusted.png"),
        title: "Trusted",
        body: "Our platform has been used by many and it's trusted by all.",
      },
      {
        img: require("../../../assets/trust/home/timelyDelivery.png"),
        title: "Timely delivery",
        body: "We help deliver goods on time to customers with our network of trusted logistics partners.",
      },
    ],
  }),

  components: {
    Heading,
  },
};
</script>

<style scoped>
@import url(./assets/IntroducingTrustpaddi.css);
</style>
