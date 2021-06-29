<template>
  <v-container class="how_it_works">
    <div class="head_text">
      <p>How it works</p>
    </div>
    <div class="how_it_works_cards">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="how_it_works_card"
      >
        <img :src="card.image" alt="" />
        <span class="text-body-2" v-text="card.text" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        image: require("../../assets/trust/homepage icons/Group 112.svg"),
        text:
          "Buyer and seller agree on the terms of the transaction: Eg Price, duration, proposed delivery date etc.",
      },
      {
        image: require("../../assets/trust/homepage icons/Group 113.svg"),
        text:
          "Buyer Initiates (Begins) the escrow: either parties can creates an escrow transaction",
      },
      {
        image: require("../../assets/trust/homepage icons/Group 115.svg"),
        text:
          "Merchandise is shipped to the buyer: Seller ships the merchandise to you or we help you retrieve the merchandise and deliver it to you",
      },
      {
        image: require("../../assets/trust/homepage icons/Group 117.svg"),
        text: "Buyer pays to TrustPaddi: TrustPaddi holds on to the payment",
      },
      {
        image: require("../../assets/trust/homepage icons/Group 118.svg"),
        text:
          "Buyer confirms the merchandise : He/she verifies the product to see if its exactly what he ordered.",
      },
    ],
  }),
};
</script>

<style scoped>
@import url(../../assets/styles/how_it_works.css);
</style>
