<template>
  <v-container class="mt-16">
    <Heading
      class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold text-center grey--text text--darken-4"
      title="Why Trustpaddi?"
    />
    <SubHeading
      class="mt-2 mb-6 text-center grey--text text--darken-3 text-subtitle-1"
      title="The safest & surest way to transact online"
    />
    <v-row justify="center" align="start">
      <v-col
        v-for="(why, i) in whyTrustPaddi"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          class="d-flex flex-column justify-start align-center text-center pa-3"
          flat
        >
          <v-avatar size="70" color="#F4F5F7">
            <v-img :lazy-src="why.avatar" :src="why.avatar" contain />
          </v-avatar>
          <v-card-title
            class="pb-0 grey--text text--darken-4 text-body-1 font-weight-bold"
            v-text="why.title"
          />
          <v-card-text v-text="why.text" class="grey--text text--darken-3" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    whyTrustPaddi: [
      {
        avatar: require("../../../assets/trust/home/sellWithEase.png"),
        title: "Sell with ease",
        text: "Buy without fear online.",
      },
      {
        avatar: require("../../../assets/trust/home/legapProtection.png"),
        title: "Legal Protection",
        text: "Both parties are legally protected while carrying out transactions with us.",
      },
      {
        avatar: require("../../../assets/trust/home/realTimeNotification.png"),
        title: "Real Time Notifications",
        text: "Get instant real time notification on the progress of your order and delivery.",
      },
      {
        avatar: require("../../../assets/trust/home/refund.png"),
        title: "100% Refund",
        text: "You get instant refund when necessary, TrustPaddi has got you covered.",
      },
      {
        avatar: require("../../../assets/trust/home/trustedLogisticsPartners.png"),
        title: "Trusted logistics partners",
        text: "With our network of trusted logistics partners we help you get the goods to your customers on time.",
      },
      {
        avatar: require("../../../assets/trust/home/support.png"),
        title: "24/7 Support",
        text: "Our customer service is second to non, we're always here for you.",
      },
      {
        avatar: require("../../../assets/trust/home/immediateDisbursement.png"),
        title: "Immediate Disbursement",
        text: "Seller get paid instantly after the goods have been delivered, payment is sure.",
      },
    ],
  }),
  components: {
    Heading: () => import("./Heading.vue"),
    SubHeading: () => import("./SubHeading.vue"),
  },
}
</script>
