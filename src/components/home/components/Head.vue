<template>
  <v-sheet color="white" class="head">
    <v-img
      :src="bg"
      :lazy-src="bg"
      :height="imgHeight"
      :class="autoOverflow"
      class="d-flex align-center"
    >
      <v-sheet height="250" class="hidden-sm-and-up"></v-sheet>
      <v-container class="mt-16">
        <v-sheet color="transparent" height="100%">
          <v-row
            align="center"
            justify="space-between"
            class="flex-column-reverse flex-sm-row"
          >
            <v-col cols="12" sm="6">
              <v-card flat color="transparent">
                <v-card-text
                  class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold grey--text text--darken-4"
                >
                  Safe transactions,<br />Happy People
                </v-card-text>
                <v-card-text class="grey--text text--darken-3">
                  Transact Securely with online vendors & marketplaces, gain
                  customers trust with TrustPaddi
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    dark
                    large
                    rounded
                    depressed
                    width="150"
                    color="amber darken-3"
                    class="text-capitalize"
                    >Get Started</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
            <v-sheet height="100" class="hidden-sm-and-up"></v-sheet>
            <v-col class="d-flex justify-end align-start" cols="12" sm="6">
              <v-sheet
                width="330"
                height="500"
                class="mt-12"
                color="transparent"
                style="position: relative"
              >
                <v-card
                  width="330"
                  height="100%"
                  elevation="12"
                  color="transparent"
                  class="ma-0 pa-0 rounded-xl"
                >
                  <v-img
                    height="100%"
                    class="pa-0 rounded-xl"
                    src="../../../assets/trust/home/headImage.jpg"
                    lazy-src="../../../assets/trust/home/headImage.jpg"
                  />
                </v-card>

                <v-card
                  elevation="12"
                  class="d-flex align-center rounded-lg pa-2"
                  :style="{
                    position: 'absolute',
                    top: avatarTop + '%',
                    left: avatarLeft + 'em',
                  }"
                >
                  <v-avatar size="35" class="mr-2">
                    <v-img
                      lazy-src="../../../assets/trust/home/avatar.jpg"
                      src="../../../assets/trust/home/avatar.jpg"
                    />
                  </v-avatar>
                  <div>
                    <v-card
                      flat
                      height="8"
                      width="100"
                      color="grey lighten-3"
                    ></v-card>
                    <v-card
                      flat
                      height="8"
                      width="50"
                      class="mt-2"
                      color="grey lighten-3"
                    ></v-card>
                  </div>
                </v-card>

                <v-sheet
                  width="220"
                  color="white"
                  elevation="12"
                  class="stats rounded-xl pa-2"
                  :style="{
                    position: 'absolute',
                    bottom: statBottom + '%',
                    left: statLeft + 'em',
                  }"
                >
                  <v-card
                    flat
                    height="50"
                    width="100%"
                    color="white"
                    class="d-flex justify-space-around align-center rounded-lg"
                  >
                    <v-icon class="grey--text text--darken-1" left
                      >mdi-arrow-left</v-icon
                    >
                    <span class="grey--text text--darken-3 text-body-2"
                      >Stats</span
                    >
                    <v-icon class="grey--text text--darken-1" right
                      >mdi-arrow-right</v-icon
                    >
                  </v-card>
                  <v-card flat color="write" class="rounded-lg">
                    <v-row
                      no-gutters
                      align="start"
                      class="statsSlide"
                      justify="space-between"
                    >
                      <v-col
                        class="d-flex flex-column ma-0"
                        cols="1"
                        v-for="(slide, i) in slides"
                        :key="i"
                      >
                        <v-slider
                          dense
                          min="0"
                          vertical
                          readonly
                          max="100"
                          hide-details
                          color="#210070"
                          class="ma-0 pa-0"
                          :value="slide.value"
                          thumb-color="transparent"
                          track-color="grey lighten-2"
                        ></v-slider>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-sheet>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </v-img>
  </v-sheet>
</template>

<script>
// @ts-nocheck
export default {
  data: () => ({
    slides: [
      { value: 20 },
      { value: 40 },
      { value: 10 },
      { value: 13 },
      { value: 30 },
      { value: 60 },
      { value: 6 },
      { value: 15 },
      { value: 70 },
      { value: 10 },
      { value: 25 },
      { value: 20 },
    ],
    avatarTop: 20,
    avatarLeft: -4,
    statBottom: -10,
    statLeft: -8,
  }),
  updated() {
    this.resizeAvatarCard()
    this.resizeStatCard()
  },
  mounted() {
    this.$nextTick(() => {
      const col1 = document.querySelectorAll(".statsSlide .col-1")
      col1.forEach((el) => {
        el.style.maxWidth = "4%"
      })
      this.resizeAvatarCard()
      this.resizeStatCard()
      document.addEventListener("resize", () => {
        this.resizeAvatarCard()
        this.resizeStatCard()
      })
    })
  },
  methods: {
    resizeAvatarCard() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.avatarTop = 20
          this.avatarLeft = -0.6
          break
        case "sm":
          this.avatarTop = 20
          this.avatarLeft = -4
          break
        case "md":
          this.avatarTop = 20
          this.avatarLeft = -4
          break
        case "lg":
          this.avatarTop = 20
          this.avatarLeft = -4
          break
        case "xl":
          this.avatarTop = 20
          this.avatarLeft = -4
          break
      }
    },
    resizeStatCard() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.statLeft = -0.5
          this.statBottom = -15
          break
        case "sm":
          this.statLeft = -8
          this.statBottom = -10
          break
        case "md":
          this.statLeft = -8
          this.statBottom = -10
          break
        case "lg":
          this.statLeft = -8
          this.statBottom = -10
          break
        case "xl":
          this.statLeft = -8
          this.statBottom = -10
          break
      }
    },
  },
  computed: {
    bg() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return require("../../../assets/trust/home/headBgMobile.svg")
        case "sm":
          return require("../../../assets/trust/home/headBgMobile.svg")
        case "md":
          return require("../../../assets/trust/home/headBg.svg")
        case "lg":
          return require("../../../assets/trust/home/headBg.svg")
        case "xl":
          return require("../../../assets/trust/home/headBg.svg")
      }
    },
    imgHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100vh"
        case "sm":
          return "100vh"
        case "md":
          return "100vh"
      }
    },
    autoOverflow() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "overflow-auto"
      }
    },
  },
}
</script>
