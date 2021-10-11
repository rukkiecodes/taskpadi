<template>
  <v-container class="mt-16">
    <Heading
      class="text-h4 text-md-h3 font-weight-bold text-center grey--text text--darken-4"
      title="How it works"
    />
    <SubHeading
      class="mt-2 mb-6 text-center grey--text text--darken-3 text-subtitle-1"
      title="The whole process is Simple, transparent and automated"
    />

    <v-sheet
      width="300"
      class="pa-3 mb-6 rounded-lg mx-auto"
      color="#F8F8F8"
      flat
    >
      <v-btn
        dark
        depressed
        width="50%"
        :color="buyColor"
        @click="showBuyerTab"
        class="text-capitalize rounded-l-lg rounded-r-0"
        :class="{ 'grey--text text--darken-4': buy != true }"
        >Buyer</v-btn
      >
      <v-btn
        depressed
        width="50%"
        :color="sellColor"
        :dark="sell == true"
        @click="showSellerTab"
        class="text-capitalize rounded-r-lg rounded-l-0"
        >Seller</v-btn
      >
    </v-sheet>
    <v-sheet v-if="buy">
      <v-row
        class="flex-column-reverse flex-sm-row"
        justify="space-between"
        align="start"
      >
        <v-col cols="12" sm="6">
          <v-card
            v-for="(buy, i) in buyer"
            :key="i"
            color="transparent"
            flat
            class="d-flex justify-start align-strat mb-8"
          >
            <v-row justify="start" align="start">
              <v-col cols="2">
                <v-avatar color="#F4F5F7" :size="avatarSize">
                  <span
                    class="text-h4 font-weight-bold"
                    v-text="buy.avatar"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="10">
                <span class="grey--text text--darken-3" v-text="buy.text" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col class="d-flex justify-end align-center" cols="12" sm="6">
          <v-sheet
            elevation="12"
            :width="imageCardWidth"
            class="ma-0 pa-0 rounded-xl"
          >
            <v-img
              width="100%"
              height="100%"
              class="rounded-xl"
              lazy-src="../../../assets/trust/home/howBuyer.jpg"
              src="../../../assets/trust/home/howBuyer.jpg"
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet v-if="sell">
      <v-row
        class="flex-column-reverse flex-sm-row"
        justify="space-between"
        align="start"
      >
        <v-col cols="12" sm="6">
          <v-card
            v-for="(sell, i) in seller"
            :key="i"
            color="transparent"
            flat
            class="d-flex justify-start align-strat mb-8"
          >
            <v-row justify="start" align="start">
              <v-col cols="2">
                <v-avatar color="#F4F5F7" :size="avatarSize">
                  <span
                    class="text-h3   font-weight-bold"
                    v-text="sell.avatar"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="10">
                <span class="grey--text text--darken-3" v-text="sell.text" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col class="d-flex justify-end align-center" cols="12" sm="6">
          <v-sheet
            elevation="12"
            :width="imageCardWidth"
            class="ma-0 pa-0 rounded-xl"
          >
            <v-img
              width="100%"
              height="100%"
              class="rounded-xl"
              lazy-src="../../../assets/trust/home/howSeller.jpg"
              src="../../../assets/trust/home/howSeller.jpg"
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    buy: true,
    sell: false,
    buyColor: "#210070",
    sellColor: "transparent",
    buyer: [
      {
        avatar: "1",
        text:
          "Buyer and seller agree on the terms of the transaction; Eg Price, duration, proposed delivery date etc.",
      },
      {
        avatar: "2",
        text:
          "Buyer Initiates (Begins) the escrow; either parties can creates an escrow transaction.",
      },
      {
        avatar: "3",
        text: "Buyer pays to TrustPaddi; TrustPaddi holds on to the payment.",
      },
      {
        avatar: "4",
        text:
          "Merchandise is shipped to the buyer; Seller ships the merchandise to you or we help you retrieve the merchandise and deliver it to you.",
      },
      {
        avatar: "5",
        text:
          "Buyer confirms the merchandise ; He/she verifies the product to see if its exactly what he ordered.",
      },
      {
        avatar: "6",
        text:
          "TrustPaddi Pays the Seller after successful transaction confirmation.",
      },
    ],
    seller: [
      {
        avatar: "1",
        text:
          "Buyer and seller agree on the terms of the transaction; Eg Price, duration, proposed delivery date etc.",
      },
      {
        avatar: "2",
        text:
          "Seller Initiates (Begins) the escrow; either parties can creates an escrow transaction.",
      },
      {
        avatar: "3",
        text: "Buyer accepts the transaction & pays to TrustPaddi; TrustPaddi holds on to the payment.",
      },
      {
        avatar: "4",
        text:
          " Merchandise is shipped to the buyer; Seller ships the merchandise or we can help retrieve the merchandise from you (The Seller) & deliver it to the buyer.",
      },
      {
        avatar: "5",
        text:
          "Buyer confirms the merchandise ; He/she verifies the product to see if its exactly what he ordered.",
      },
      {
        avatar: "6",
        text:
          "TrustPaddi Pays the Seller after successful transaction confirmation.",
      },
    ],
  }),
  components: {
    Heading: () => import("./Heading.vue"),
    SubHeading: () => import("./SubHeading.vue"),
  },
  updated() {
    this.changeButtonColor()
  },
  methods: {
    showBuyerTab() {
      this.buy = true
      this.sell = false
    },
    showSellerTab() {
      this.sell = true
      this.buy = false
    },
    changeButtonColor() {
      if (this.buy) {
        this.buyColor = "#210070"
        this.sellColor = "transparent"
      }
      if (this.sell) {
        this.buyColor = "transparent"
        this.sellColor = "#210070"
      }
    },
  },
  computed: {
    imageCardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%"
        case "sm":
          return "100%"
        case "md":
          return "100%"
        case "lg":
          return 400
        case "xl":
          return 600
      }
    },
    avatarSize () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 50
          case 'sm': return 60
          case 'md': return 60
          case 'lg': return 64
          case 'xl': return 70
        }
      },
  },
}
</script>
