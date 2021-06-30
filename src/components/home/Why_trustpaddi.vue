<template>
  <v-container class="why_trustpaddy">
    <div class="head_text">
      <p>Why TrustPaddi</p>
    </div>
    <div class="sides">
      <div class="left">
        <p class="text-body-2" v-for="(list, index) in lists" :key="index">
          <span class="font-weight-bold">{{ list.title }}:</span> {{ list.body }}
        </p>
      </div>
      <div class="right">
        <img src="../../assets/trust/why.svg" alt="" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    lists: [
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
        title: "100% Refund(when necessary",
        body:
          " You get instant refund when necessary, TrustPaddi has got you covered",
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
};
</script>

<style scoped>
@import url(../../assets/styles/why_trustpaddy.css);
</style>
