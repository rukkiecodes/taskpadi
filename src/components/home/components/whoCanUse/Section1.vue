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
            src="../../../../assets/trust/home/peer.jpg"
            lazy-src="../../../../assets/trust/home/peer.jpg"
          />
        </v-card>

        <v-card
          elevation="12"
          class="d-flex align-center rounded-lg pa-2"
          :style="{
            position: 'absolute',
            top: airplaneAratarTop + '%',
            right: airplaneAratarRight + 'em',
          }"
        >
          <v-avatar size="35" class="mr-2">
            <v-img
              lazy-src="../../../../assets/trust/home/airplane.png"
              src="../../../../assets/trust/home/airplane.png"
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
            top: greenBoxCheckTop + '%',
            right: greenBoxCheckRight + 'em',
          }"
        >
          <v-avatar size="35" class="mr-2">
            <v-img
              lazy-src="../../../../assets/trust/home/greenBoxCheck.png"
              src="../../../../assets/trust/home/greenBoxCheck.png"
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
      <v-card flat class="rounded-lg" :color="section">
        <v-card-text
          :class="title"
          class="text-uppercase font-weight-bold text-subtitle-2"
          >Individuals</v-card-text
        >
        <v-card-title
          :class="sectionClass"
          class="text-h4 text-md-h3 font-weight-bold"
          >Peer 2 Peer</v-card-title
        >
        <v-card-text :class="sectionBodyClass"
          >Anyone can use TrustPaddi especially when it comes to making
          transactions with unknown online vendors, service providers or with
          people whom you haven't done business with before.
        </v-card-text>
        <v-card-actions>
          <v-btn
            dark
            large
            depressed
            width="200"
            color="#210070"
            class="text-capitalize rounded-lg"
            >Create a Transaction</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    airplaneAratarTop: 20,
    airplaneAratarRight: -4,
    greenBoxCheckTop: 40,
    greenBoxCheckRight: -4,
  }),
  updated() {
    this.resizeAirplaneAvatarCard()
    this.resizeGreenBoxCheckAvatarCard()
  },
  mounted() {
    this.$nextTick(() => {
      this.resizeAirplaneAvatarCard()
      this.resizeGreenBoxCheckAvatarCard()
      document.addEventListener("resize", () => {
        this.resizeAirplaneAvatarCard()
        this.resizeGreenBoxCheckAvatarCard()
      })
    })
  },
  methods: {
    resizeAirplaneAvatarCard() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.airplaneAratarTop = 5
          this.airplaneAratarRight = 0
          break
        case "sm":
          this.airplaneAratarTop = 10
          this.airplaneAratarRight = -1
          break
        case "md":
          this.airplaneAratarTop = 20
          this.airplaneAratarRight = -2
          break
        case "lg":
          this.airplaneAratarTop = 20
          this.airplaneAratarRight = -4
          break
        case "xl":
          this.airplaneAratarTop = 20
          this.airplaneAratarRight = -4
          break
      }
    },
    resizeGreenBoxCheckAvatarCard() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.greenBoxCheckTop = 20
          this.greenBoxCheckRight = 0
          break
        case "sm":
          this.greenBoxCheckTop = 25
          this.greenBoxCheckRight = -1
          break
        case "md":
          this.greenBoxCheckTop = 60
          this.greenBoxCheckRight = -1
          break
        case "lg":
          this.greenBoxCheckTop = 60
          this.greenBoxCheckRight = -6
          break
        case "xl":
          this.greenBoxCheckTop = 60
          this.greenBoxCheckRight = -6
          break
      }
    },
  },
  computed: {
    section() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "deep-purple accent-4"
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
  },
}
</script>
