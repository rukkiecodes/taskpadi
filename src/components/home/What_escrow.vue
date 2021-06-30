<template>
  <v-container class="what_escrow">
    <div class="what_escrow_head_text">
      <p class="p1">What is Escrow?</p>
      <p class="p2 text-body-1">
        ‘Escrow’ refers to money held by a trusted third-party on behalf of the
        buyer and seller. The money is released to the seller only after all the
        terms of a transaction have been met....
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on" class="font-weight-bold">more</span>
          </template>
          <v-card class="menu_card" width="350">
            <v-card-text>
              "Escrow" is a financial agreement in which a third party controls
              payments between two transacting parties and only releases the
              funds involved when all of the terms of a given contract are met.
            </v-card-text>
            <v-card-text>
              Therefore, Whether you’re dealing with a real estate transaction,
              an online seller or a Crypto trader etc escrow is the best means
              to transact Securely and this is what TrustPaddi offers, Escrow
              Protection at it's best.
            </v-card-text>
          </v-card>
        </v-menu>
      </p>
    </div>

    <img
      src="../../assets/trust/Cash Payment-bro@2x.png"
      alt=""
      class="what_escrow_head_image"
    />
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>

<style scoped>
@import url(../../assets/styles/what_escrow.css);
</style>
