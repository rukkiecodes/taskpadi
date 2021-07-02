<template>
  <v-container class="read_more">
    <div class="read_more_section_one">
      <div class="read_more_left_head">
        <p class="text-h6 font-weight-bold">
          Transact Securely with online vendors & marketplaces, gain customers
          trust with TrustPaddi
        </p>
      </div>

      <div class="read_more_cards">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="read_more_card py-5 px-5 rounded-lg"
        >
          <div class="card_head mt-3 py-2">
            <div class="read_more_card_avatar" color="#EFF0F7">
              <img :src="card.image" alt="" />
            </div>
          </div>
          <p class="mt-4 text-body-1 pt-3" v-text="card.text" />
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
        image: require("../../assets/trust/sad-emoticon-square-face.png"),
        text: `We know how Devastating it can be losing money to an online fraudster, and if not Cash On Delivery, we're sure you won't make any purchases.`,
      },
      {
        image: require("../../assets/trust/tap.png"),
        text: `For business owners and service providers, We also know how hard it can be getting potential customers to trust the genuineness of your upcoming brand online, on the other hand Cash on delivery isn't always a convenient option for you.`,
      },
      {
        image: require("../../assets/trust/cooperation.png"),
        text: `Therefore, It all boils down to the issue of "trust" and this is what TrustPaddi is all about, bridging the trust gap between potential customers, service providers & businesses online while protecting there various interest.`,
      },
    ],
  }),
};
</script>

<style scoped>
@import url(../../assets/styles/read_more.css);
</style>
