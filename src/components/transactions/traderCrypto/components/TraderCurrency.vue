<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-select
        :items="currency"
        label="Currency"
        color="deep-purple accent-4"
        full-width
        dense
        outlined
        @change="setTraderCryptoCurrency"
      ></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    currency: [
      "Bitcoin",
      "Ethereum",
      "Ethereum Classic",
      "Litecoin",
      "Namecoin",
      "Peercoin",
      "Dogecoin",
      "Gridcoin",
      "Primecoin",
      "Ripple",
      "Nxt",
      "Auroracoin",
      "Dash",
      "NEO",
      "MazaCoin",
      "Monero",
      "Titcoin",
      "Verge",
      "Stellar",
      "Vertcoin",
      "Nano",
      "Tether",
      "Firo",
      "Zcash",
      "Bitcoin Cash",
      "EOS.IO",
      "Cardano",
      "BitClout",
    ],
  }),
  methods: {
    setTraderCryptoCurrency(e) {
      this.traderCrypto.traderCryptoInputs.currency = e
    }
  },
  computed: {
    ...mapState(["traderCrypto"]),
  },
};
</script>
