<template>
  <v-container class="who_can_use">
    <div class="who_can_use_head_text">
      <p class="p1">Who can use Trustpaddi</p>
    </div>

    <div class="who_can_use_cards">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="who_can_use_cards_card rounded-xl"
      >
        <div class="img">
          <img :src="card.Image" alt="" />
        </div>
        <div class="texts">
          <p class="p1 text-h6">{{ card.head }}</p>
          <p class="p2 text-body-2">
            {{ card.body }}
          </p>
          <v-btn
            small
            class="py-4 rounded-lg text-capitalize white--text"
            color="#4169E2"
            depressed
            >{{ card.button_text }}</v-btn
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        Image: require("../../../assets/trust/homepage icons/Group 139.svg"),
        head: "Individuals",
        body:
          "Anyone can use TrustPaddi especially when it comes to making transactions with unknown online vendors, service providers or with people whom you haven't done business with before.",
        button_text: "create a transaction",
      },
      {
        Image: require("../../../assets/trust/homepage icons/Group 140.svg"),
        head: "Businesses",
        body:
          "Any Business owner can use TrustPaddi, with our escrow services you can gain the Trust and Reliability that big brands enjoy, boost your sales, avoid the risk associated with cash on delivery (COD), attend to as much order as you want and enjoy peace of mind knowing you will get paid instantly without stories.",
        button_text: "Get started",
      },
      {
        Image: require("../../../assets/trust/homepage icons/Group 141.svg"),
        head: "E-commerce",
        body:
          "Potential customers are always skeptical about certain e-commerce sites which hasn't been recognised, the best way to gain your customers trust is to integrate TrustPaddi with your e-commerce website or marketplace.",
        button_text: "Integrate Now",
      },
    ],
  }),
};
</script>

<style scoped>
@import url(../../../assets/styles/who_can_use.css);
</style>
