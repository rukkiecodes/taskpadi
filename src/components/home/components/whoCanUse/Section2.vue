<template>
  <v-row
    align="center"
    :class="section"
    :no-gutters="noGutter"
    justify="space-between"
    class="flex-column-reverse flex-sm-row"
  >
    <v-col cols="12" sm="6" lg="6">
      <v-card flat class="rounded-lg" color="transparent">
        <v-card-text
          :class="title"
          class="text-uppercase font-weight-bold text-subtitle-2"
          >businesses</v-card-text
        >
        <v-card-title
          :class="sectionClass"
          class="text-h4 text-md-h3 font-weight-bold"
          >Sellers, service providers, Crypto traders & online
          vendors</v-card-title
        >
        <v-card-text :class="sectionBodyClass"
          >Any Business owner can use TrustPaddi, with our escrow services you
          can gain the Trust and Reliability that big brands enjoy, boost your
          sales, avoid the risk associated with cash on delivery (COD), attend
          to as much order as you want and enjoy peace of mind knowing you will
          get paid instantly without stories.
        </v-card-text>
        <v-card-actions>
          <v-btn
            dark
            large
            depressed
            width="200"
            color="#210070"
            class="text-capitalize rounded-lg"
            >Get Started</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="5">
      <v-sheet
        width="100%"
        height="500"
        class="mt-0 mt-sm-12 rounded-xl"
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
            src="../../../../assets/trust/home/bussiness.jpg"
            lazy-src="../../../../assets/trust/home/bussiness.jpg"
          />
        </v-card>

        <v-card
          elevation="12"
          class="d-flex align-center rounded-lg pa-2"
          :style="{
            position: 'absolute',
            top: holdingCoinsAvatarTop + '%',
            left: holdingCoinsAvatarLeft + 'em',
          }"
        >
          <v-avatar size="35" class="mr-2">
            <v-img
              lazy-src="../../../../assets/trust/home/holdingCoins.png"
              src="../../../../assets/trust/home/holdingCoins.png"
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
            top: tinyMonitorTop + '%',
            left: tinyMonitorLeft + 'em',
          }"
        >
          <v-avatar size="35" class="mr-2">
            <v-img
              lazy-src="../../../../assets/trust/home/tinyMonitor.png"
              src="../../../../assets/trust/home/tinyMonitor.png"
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
  </v-row>
</template>

<script>
export default {
  data: () => ({
    holdingCoinsAvatarTop: 20,
    holdingCoinsAvatarLeft: -4,
    tinyMonitorTop: 40,
    tinyMonitorLeft: -4,
  }),
  updated() {
    this.resizeAirplaneAvatarCard()
    this.resizeTinyMonitorAvatarCard()
  },
  mounted() {
    this.$nextTick(() => {
      this.resizeAirplaneAvatarCard()
      this.resizeTinyMonitorAvatarCard()
      document.addEventListener("resize", () => {
        this.resizeAirplaneAvatarCard()
        this.resizeTinyMonitorAvatarCard()
      })
    })
  },
  methods: {
    resizeAirplaneAvatarCard() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.holdingCoinsAvatarTop = 65
          this.holdingCoinsAvatarLeft = 0
          break
        case "sm":
          this.holdingCoinsAvatarTop = 65
          this.holdingCoinsAvatarLeft = -1
          break
        case "md":
          this.holdingCoinsAvatarTop = 20
          this.holdingCoinsAvatarLeft = -2
          break
        case "lg":
          this.holdingCoinsAvatarTop = 20
          this.holdingCoinsAvatarLeft = -4
          break
        case "xl":
          this.holdingCoinsAvatarTop = 20
          this.holdingCoinsAvatarLeft = -4
          break
      }
    },
    resizeTinyMonitorAvatarCard() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.tinyMonitorTop = 80
          this.tinyMonitorLeft = 0
          break
        case "sm":
          this.tinyMonitorTop = 80
          this.tinyMonitorLeft = -1
          break
        case "md":
          this.tinyMonitorTop = 60
          this.tinyMonitorLeft = -2
          break
        case "lg":
          this.tinyMonitorTop = 60
          this.tinyMonitorLeft = -6
          break
        case "xl":
          this.tinyMonitorTop = 60
          this.tinyMonitorLeft = -6
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
  },
}
</script>
