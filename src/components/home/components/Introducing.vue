<template>
  <v-container class="mt-16">
    <Heading
      class="text-h4 text-md-h3 font-weight-bold text-center grey--text text--darken-4"
      title="Introducing Trustpaddi"
    />
    <SubHeading
      class="mt-2 mb-6 text-center grey--text text--darken-3 text-subtitle-1"
      title="The safest & surest way to transact online"
    />
    <p
      class="text-body-1 text-center grey--text text--darken-3"
      v-for="(quote, i) in blockquote"
      :key="i"
      v-html="quote"
    />
    <v-row class="mt-8" justify="space-between" align="start">
      <v-col cols="12" sm="6" md="3" lg="3" v-for="(card, i) in cards" :key="i">
        <v-card class="text-center pa-4 mx-auto" width="400" flat>
          <v-avatar size="80" tile>
            <v-img :src="card.image" :lazy-src="card.image" contain />
          </v-avatar>
          <v-card-title
            class="d-flex justify-center grey--text text--darken-4"
            v-text="card.title"
          />
          <v-card-text class="grey--text text--darken-3" v-text="card.body" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    blockquote: [
      `<span class="font-weight-bold">TrustPaddi</span> is Nigerians most trusted escrow/middleman platform built with
      the latest technology which enables safer transactions between online
      vendors (marketplaces, businesses etc) & individuals whether online or
      offline.`,
      `With TrustPaddi Cash on delivery just got better cause we provide full
      escrow protection for both parties and stress-free delivery options for
      online business owners`,
      `Therefore, Whether you’re dealing with a real estate transaction, an
      online seller or a Crypto trader etc escrow is the best means to transact
      Securely and this is what TrustPaddi offers, Escrow Protection at it's
      best.`,
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
};
</script>
