<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center" align="center">
        <Title title="Why TrustPaddi" />
      </v-row>
      <v-row class="flex-column-reverse flex-md-row" justify="space-between" align="start">
        <v-col cols="12" sm="12" md="6">
          <p
            v-for="(text, i) in texts"
            :key="i"
            class="grey--text text--darken-3 text-body-1"
          >
            <span class="deep-purple--text text--accent-4 font-weight-bold"
              >{{ text.title }}:</span
            >
            {{ text.body }}
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="5">
          <v-img
            lazy-src="../../../assets/trust/about.svg"
            src="../../../assets/trust/about.svg"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    texts: [
      {
        title: "Legal Protection",
        body:
          "Both parties are legally protected while carrying out transactions with us.",
      },
      {
        title: "Real Time Notifications",
        body:
          "Get instant real time notification on the progress of your order and delivery",
      },
      {
        title: "100% Refund(when necessary)",
        body:
          "You get instant refund when necessary, TrustPaddi has got you covered",
      },
      {
        title: "Trusted logistics partners",
        body:
          "With our network of trusted logistics partners we help you get the goods to your customers on time",
      },
      {
        title: "24/7 Support",
        body:
          "Our customer service is second to non, we're always here for you",
      },
      {
        title: "Immediate Disbursement",
        body:
          "Seller get paid instantly after the goods have been delivered, payment is sure",
      },
    ],
  }),
  components: {
    Title: () => import("../../app_components/Title.vue"),
  },
};
</script>
