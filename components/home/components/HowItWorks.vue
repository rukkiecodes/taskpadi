<template>
  <div class="howItWoks">
    <Heading
      h1="How it works"
      p="The whole process is Simple, transparent and automated"
    />

    <div class="actions">
      <vs-button-group>
        <vs-button
          @click="
            () => {
              showBuyer = true;
              showSeller = false;
              active = 1;
            }
          "
          :active="active == 1"
          flat
          color="#210070"
          size="large"
        >
          Buyer
        </vs-button>
        <vs-button
          @click="
            () => {
              showBuyer = false;
              showSeller = true;
              active = 2;
            }
          "
          :active="active == 2"
          flat
          color="#210070"
          size="large"
        >
          Seller
        </vs-button>
      </vs-button-group>
    </div>

    <div class="buyer" v-show="showBuyer">
      <div class="left">
        <div class="texts" v-for="(text, i) in leftText" :key="i">
          <div class="avatar">
            <p v-text="text.index" />
          </div>

          <p class="mainText" v-text="text.text" />
        </div>
      </div>
      <div class="right">
        <div class="rightCard">
          <img src="../../../assets/trust/home/howBuyer.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="seller" v-show="showSeller">
      <div class="left">
        <div class="texts" v-for="(text, i) in rightText" :key="i">
          <div class="avatar">
            <p v-text="text.index" />
          </div>

          <p class="mainText" v-text="text.text" />
        </div>
      </div>
      <div class="right">
        <div class="rightCard">
          <img src="../../../assets/trust/home/howSeller.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "./Heading.vue";
export default {
  data: () => ({
    showBuyer: true,
    showSeller: false,
    active: 1,
    leftText: [
      {
        index: 1,
        text: "Buyer and seller agree on the terms of the transaction; Eg Price, duration, proposed delivery date etc.",
      },
      {
        index: 2,
        text: "Buyer Initiates (Begins) the escrow; either parties can creates an escrow transaction.",
      },
      {
        index: 3,
        text: "Buyer pays to TrustPaddi; TrustPaddi holds on to the payment.",
      },
      {
        index: 4,
        text: "Merchandise is shipped to the buyer; Seller ships the merchandise to you or we help you retrieve the merchandise and deliver it to you.",
      },
      {
        index: 5,
        text: "Buyer confirms the merchandise ; He/she verifies the product to see if its exactly what he ordered.",
      },
    ],

    rightText: [
      {
        index: 1,
        text: "Buyer and seller agree on the terms of the transaction; Eg Price, duration, proposed delivery date etc.",
      },
      {
        index: 2,
        text: "Seller Initiates (Begins) the escrow; either parties can creates an escrow transaction.",
      },
      {
        index: 3,
        text: "Buyer accepts the transaction & pays to TrustPaddi; TrustPaddi holds on to the payment.",
      },
      {
        index: 4,
        text: "Merchandise is shipped to the buyer; Seller ships the merchandise or we can help retrieve the merchandise from you (The Seller) & deliver it to the buyer.",
      },
      {
        index: 5,
        text: "Buyer confirms the merchandise ; He/she verifies the product to see if its exactly what he ordered.",
      },
      {
        index: 6,
        text: "TrustPaddi Pays the Seller after successful transaction confirmation.",
      },
    ],
  }),

  components: {
    Heading,
  },
};
</script>

<style scoped>
@import url(./assets/howItWoks.css);
</style>
