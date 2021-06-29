<template>
  <v-container class="who_can_use">
    <div class="who_can_use_head_text">
      <p class="p1">Who can use Trustpaddi</p>
    </div>

    <div class="who_can_use_cards">
      <div class="who_can_use_cards_card rounded-xl">
        <div class="img">
          <img src="../../assets/trust/homepage icons/Group 139.svg" alt="" />
        </div>
        <div class="texts">
          <p class="p1 text-h6">Individuals</p>
          <p class="p2 text-body-2">
            Anyone can use TrustPaddi especially when it comes to making
            transactions with unknown online vendors, service providers or with
            people whom you haven't done business with before.
          </p>
          <v-btn
            small
            class="py-4 rounded-lg text-capitalize white--text"
            color="#4169E2"
            depressed
            >create a transaction</v-btn
          >
        </div>
      </div>
      <div class="who_can_use_cards_card rounded-xl">
        <div class="img">
          <img src="../../assets/trust/homepage icons/Group 140.svg" alt="" />
        </div>
        <div class="texts">
          <p class="p1 text-h6">Businesses</p>
          <p class="p2 text-body-2">
            Any Business owner can use TrustPaddi, with our escrow services you
            can gain the Trust and Reliability that big brands enjoy, boost your
            sales, avoid the risk associated with cash on delivery (COD), attend
            to as much order as you want and enjoy peace of mind knowing you
            will get paid instantly without stories.
          </p>
          <v-btn
            small
            class="py-4 rounded-lg text-capitalize white--text"
            color="#4169E2"
            depressed
            >Get started</v-btn
          >
        </div>
      </div>
      <div class="who_can_use_cards_card rounded-xl">
        <div class="img">
          <img src="../../assets/trust/homepage icons/Group 141.svg" alt="" />
        </div>
        <div class="texts">
          <p class="p1 text-h6">E-commerce</p>
          <p class="p2 text-body-2">
            Potential customers are always skeptical about certain e-commerce
            sites which hasn't been recognised, the best way to gain your
            customers trust is to integrate TrustPaddi with your e-commerce
            website or marketplace.
          </p>
          <v-btn
            small
            class="py-4 rounded-lg text-capitalize white--text"
            color="#4169E2"
            depressed
            >Integrate Now</v-btn
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
        head: "Lorem ipsum",
        body:
          "Lorem ipsum dolor sit amet lorem consectrur disciping Lorem ipsum dolor sit amet consectrur.",
      },
    ],
  }),
};
</script>

<style scoped>
@import url(../../assets/styles/who_can_use.css);
</style>
