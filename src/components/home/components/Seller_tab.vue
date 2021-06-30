<template>
  <div class="seller_tab">
    <div v-for="(card, index) in cards" :key="index" class="how_it_works_card">
      <img :src="card.image" alt="" />
      <div class="how_it_works_card_text">
        <span class="text-body-2" v-text="card.text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        image: require("../../../assets/trust/homepage icons/Group 112.svg"),
        text:
          "Buyer and seller agree on the terms of the transaction: Eg Price, duration, proposed delivery date etc",
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 117.svg"),
        text:
          "Seller Initiates (Begins) the escrow: either parties can creates an escrow transaction",
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 113.svg"),
        text:
          "Buyer accepts the transaction & pays to TrustPaddi: TrustPaddi holds on to the payment",
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 115.svg"),
        text:
          "Merchandise is shipped to the buyer: Seller ships the merchandise or we can help retrieve the merchandise from you (The Seller) & deliver it to the buyer",
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 130.svg"),
        text:
          "Buyer confirms the merchandise : He/she verifies the product to see if its exactly what he ordered",
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 118.svg"),
        text: "TrustPaddi Pays You the Seller after confirmation",
      },
    ],
  }),
};
</script>
