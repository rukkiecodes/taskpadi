<template>
  <v-row
    align="center"
    :class="section"
    :no-gutters="noGutter"
    justify="space-between"
  >
    <v-col cols="12" sm="6" lg="5">
      <v-sheet
        width="100%"
        height="500"
        style="position: relative"
        class="mt-0 mt-sm-12 rounded-xl"
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
            src="../../../../assets/trust/home/e_commerce.jpg"
            lazy-src="../../../../assets/trust/home/e_commerce.jpg"
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
      <v-card flat class="rounded-lg" color="transparent">
        <v-card-text
          :class="title"
          class="text-uppercase font-weight-bold text-subtitle-2"
          >E-commerce</v-card-text
        >
        <v-card-title
          :class="sectionClass"
          class="text-h4 text-md-h3 font-weight-bold"
          >ONLINE <br />
          MARKETPLACES/ E-COMMERCE STORES</v-card-title
        >
        <v-card-text :class="sectionBodyClass"
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
            :class="roundButton"
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
          this.shopAratarRight = 0
          break
        case "sm":
          this.shopAratarTop = 20
          this.shopAratarRight = -1
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
          this.blackShirtRight = 0
          break
        case "sm":
          this.blackShirtTop = 50
          this.blackShirtRight = -1
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
  computed: {
    section() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "deep-purple accent-4 rounded-xl mt-10"
        case "sm":
          return "transparent"
        case "md":
          return "transparent"
        case "lg":
          return "transparent"
        case "xl":
          return "transparent"
      }
    },
    title() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "white--text"
        case "sm":
          return "amber--text text--darken-3"
        case "md":
          return "amber--text text--darken-3"
        case "lg":
          return "amber--text text--darken-3"
        case "xl":
          return "amber--text text--darken-3"
      }
    },
    sectionClass() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "white--text"
      }
    },
    sectionBodyClass() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "white--text text-body-1"
        case "sm":
          return "grey--text text--darken-3 text-body-1"
        case "md":
          return "grey--text text--darken-3 text-body-1"
        case "lg":
          return "grey--text text--darken-3 text-body-1"
        case "xl":
          return "grey--text text--darken-3 text-body-1"
      }
    },

    noGutter() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
          return false
        case "md":
          return false
        case "lg":
          return false
        case "xl":
          return false
      }
    },

    roundButton() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "rounded-bl-xl"
        case "sm":
          return "rounded-lg"
        case "md":
          return "rounded-lg"
        case "lg":
          return "rounded-lg"
        case "xl":
          return "rounded-lg"
      }
    },
  },
}
</script>
