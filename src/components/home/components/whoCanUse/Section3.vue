<template>
  <v-row justify="space-between" align="center">
    <v-col cols="12" sm="6" lg="5">
      <v-sheet
        width="100%"
        height="500"
        class="mt-12"
        style="position: relative"
      >
        <v-card
          width="100%"
          height="100%"
          elevation="12"
          color="transparent"
          class="ma-0 pa-0 rounded-xl"
        >
          <v-img
            height="100%"
            class="pa-0 rounded-xl"
            position="center center"
            src="../../../../assets/trust/home/headImage.jpg"
            lazy-src="../../../../assets/trust/home/headImage.jpg"
          />
        </v-card>

        <v-card
          elevation="12"
          class="d-flex align-center rounded-lg pa-2"
          :style="{
            position: 'absolute',
            top: shopAratarTop + '%',
            right: shopAratarRight + 'em',
          }"
        >
          <v-avatar size="35" class="mr-2">
            <v-img
              lazy-src="../../../../assets/trust/home/shop.png"
              src="../../../../assets/trust/home/shop.png"
            />
          </v-avatar>
          <div>
            <v-card flat height="8" width="100" color="grey lighten-3"></v-card>
            <v-card
              flat
              height="8"
              width="100"
              class="mt-2"
              color="grey lighten-3"
            ></v-card>
          </div>
        </v-card>
        <v-card
          elevation="12"
          class="d-flex align-center rounded-lg pa-2"
          :style="{
            position: 'absolute',
            top: blackShirtTop + '%',
            right: blackShirtRight + 'em',
          }"
        >
          <v-avatar size="35" class="mr-2">
            <v-img
              lazy-src="../../../../assets/trust/home/blackShirt.png"
              src="../../../../assets/trust/home/blackShirt.png"
            />
          </v-avatar>
          <div>
            <v-card flat height="8" width="100" color="grey lighten-3"></v-card>
            <v-card
              flat
              height="8"
              width="100"
              class="mt-2"
              color="grey lighten-3"
            ></v-card>
          </div>
        </v-card>
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="6" lg="6">
      <v-card flat color="transparent">
        <v-card-text
          class="text-uppercase amber--text text--darken-3 font-weight-bold text-subtitle-2"
          >E-commerce</v-card-text
        >
        <v-card-title class="text-h4 text-sm-h3 font-weight-bold"
          >ONLINE <br />
          MARKETPLACES/ E-COMMERCE STORES
        </v-card-title>
        <v-card-text class="grey--text text--darken-3 text-body-1"
          >Potential customers are always skeptical about certain e-commerce
          sites which hasn't been recognised, the best way to gain your
          customers trust is to integrate TrustPaddi with your e-commerce
          website or marketplace.
        </v-card-text>
        <v-card-actions>
          <v-btn
            dark
            large
            depressed
            width="200"
            color="#210070"
            class="text-capitalize rounded-lg"
            >Integrate Now</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    shopAratarTop: 20,
    shopAratarRight: -4,
    blackShirtTop: 40,
    blackShirtRight: -4,
  }),
  updated() {
    this.resizeShopAvatarCard()
    this.resizeBlackShirtAvatarCard()
  },
  mounted() {
    this.$nextTick(() => {
      this.resizeShopAvatarCard()
      this.resizeBlackShirtAvatarCard()
      document.addEventListener("resize", () => {
        this.resizeShopAvatarCard()
        this.resizeBlackShirtAvatarCard()
      })
    })
  },
  methods: {
    resizeShopAvatarCard() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.shopAratarTop = 5
          this.shopAratarRight = -0.5
          break
        case "sm":
          this.shopAratarTop = 20
          this.shopAratarRight = -2
          break
        case "md":
          this.shopAratarTop = 20
          this.shopAratarRight = -2
          break
        case "lg":
          this.shopAratarTop = 20
          this.shopAratarRight = -4
          break
        case "xl":
          this.shopAratarTop = 20
          this.shopAratarRight = -4
          break
      }
    },
    resizeBlackShirtAvatarCard() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.blackShirtTop = 20
          this.blackShirtRight = -0.5
          break
        case "sm":
          this.blackShirtTop = 50
          this.blackShirtRight = -2
          break
        case "md":
          this.blackShirtTop = 60
          this.blackShirtRight = -1
          break
        case "lg":
          this.blackShirtTop = 60
          this.blackShirtRight = -6
          break
        case "xl":
          this.blackShirtTop = 60
          this.blackShirtRight = -6
          break
      }
    },
  },
}
</script>

<style></style>
