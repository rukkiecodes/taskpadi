<template>
  <v-container class="mt-16">
    <Heading
      class="introducingTrustpaddi text-h4 text-md-h3 font-weight-bold text-center grey--text text--darken-4"
      style="font-family: 'Montserrat', sans-serif !important;"
      title="Introducing Trustpaddi"
      data-aos="fade-up"
    />
    <SubHeading
      class="mt-2 mb-6 text-center grey--text text--darken-3 text-subtitle-1"
      style="font-family: 'Montserrat', sans-serif !important;"
      title="The safest & surest way to transact online"
      data-aos="fade-up"
    />
    <p
      class="text-body-1 text-center grey--text text--darken-3 mb-8"
      style="font-family: 'Montserrat', sans-serif !important;"
      v-for="(quote, i) in blockquote"
      :key="i"
      v-html="quote"
      data-aos="fade-up"
    />
    <v-row class="mt-8" justify="space-between" align="start">
      <v-col
        cols="12"
        sm="6"
        md="3"
        lg="3"
        v-for="(card, i) in cards"
        :key="i"
        data-aos="fade-up"
      >
        <v-card class="text-center pa-4 mx-auto" width="400" flat>
          <v-avatar size="80" tile>
            <v-img :src="card.image" :lazy-src="card.image" contain />
          </v-avatar>
          <v-card-title
            class="d-flex justify-center grey--text text--darken-4"
            style="font-family: 'Montserrat', sans-serif !important;"
            v-text="card.title"
          />
          <v-card-text
            class="grey--text text--darken-3"
            v-text="card.body"
            style="font-family: 'Montserrat', sans-serif !important;"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ts-nocheck
import * as AOS from "aos"
import "aos/dist/aos.css"
export default {
  data: () => ({
    blockquote: [
      `<span class="font-weight-bold">TrustPaddi</span> is a payment solution built with escrow protection, which ensures safer and scam free transactions between online vendors, service providers and individuals online.`,
    ],
    cards: [
      {
        image: require("../../../assets/trust/home/convenient.png"),
        avatarColor: "",
        title: "Convenient",
        body: "TrustPaddi is convenient for both buyer and the seller.",
      },
      {
        image: require("../../../assets/trust/home/secure.png"),
        avatarColor: "",
        title: "Secure",
        body:
          "TrustPaddi ensures buyer and seller protection, and protects the interest of both parties.",
      },
      {
        image: require("../../../assets/trust/home/trusted.png"),
        avatarColor: "",
        title: "Trusted",
        body: "Our platform has been used by many and it's trusted by all.",
      },
      {
        image: require("../../../assets/trust/home/timelyDelivery.png"),
        avatarColor: "",
        title: "Timely delivery",
        body:
          "We help deliver goods on time to customers with our network of trusted logistics partners",
      },
    ],
  }),
  components: {
    Heading: () => import("./Heading.vue"),
    SubHeading: () => import("./SubHeading.vue"),
  },

  mounted() {
    this.$nextTick(() => {
      AOS.init()
    })
  },
}
</script>
