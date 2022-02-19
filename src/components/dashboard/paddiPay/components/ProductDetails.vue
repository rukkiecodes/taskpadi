<template>
  <v-col cols="12" sm="6" lg="8">
    <v-card flat color="transparent">
      <v-list color="transparent">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold"
              >GORE-TEXNike</v-list-item-title
            >
            <v-list-item-subtitle>Nike Air Force 1</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn color="red" icon large>
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card flat color="transparent">
      <v-card-title>
        <span class="text-h6 font-weight-medium">Description;</span>
        <v-spacer />
        <span class="text-h4 font-weight-bold">$235</span>
      </v-card-title>

      <v-card-text
        class="d-flex flex-column flex-sm-row justify-start align-center py-0 pl-2 my-0"
      >
        <v-rating
          v-model="rating"
          background-color="yellow"
          color="yellow accent-4"
          length="5"
          readonly
          dense
          half-increments
          hover
          size="20"
        ></v-rating>
        <span>{{ rating }} Stars</span>
      </v-card-text>
      <v-card-text class="text-center text-sm-left">
        The GORE-TEX lining, large lugs on the outsole and removable silicone
        ankle strap toughen up the icon while the padded, high-cut collar keeps
        the heritage b-ball look and hardwood comfort. Size 45
      </v-card-text>
      <v-card flat :color="detailsCard" :dark="detailsCardMode">
        <v-card-title
          class="text-body-1 font-weight-medium"
          :class="detailsCardTextClass"
          >Merchant’s Details</v-card-title
        >
      </v-card>
      <v-divider />
      <v-card flat class="text-center d-flex flex-column" color="transparent">
        <v-card-title class="text-subtitle-1 font-weight-medium">
          <v-avatar class="white--text mr-3" color="grey darken-2">AZ</v-avatar>
          AZ Ventures

          <v-spacer />

          <span
            class="deep-purple--text text--accent-4 text-body-2 font-weight-bold"
            >Verified
            <!-- <v-icon color="green"
              >mdi-checkbox-marked-circle-outline</v-icon
            > -->
          </span>
        </v-card-title>

        <v-card-text class="text-center text-sm-left">
          <v-row
            no-gutters
            justify="space-between"
            align="center"
            class="flex-column-reverse flex-sm-row"
          >
            <v-col cols="12" sm="6">
              <p class="grey--text text--darken-4 mt-2">
                <!-- <v-icon small color="amber">mdi-star-circle</v-icon> Location : -->
                <span class="font-weight-bold">Yaba, Lagos</span>
              </p>
              <p class="grey--text text--darken-4 mt-n2">
                <!-- <v-icon small color="amber">mdi-star-circle</v-icon> Category : -->
                <span class="font-weight-bold">Fashion</span>
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              class="d-flex justify-center justify-sm-end"
            >
              <v-progress-circular
                :rotate="-90"
                :size="90"
                :width="10"
                :value="value"
                color="amber"
              >
                <span class="grey--text text--darken-3 text-center text-caption"
                  >Trust Level<br /><span
                    class="amber--text text--darken-4 font-weight-bold"
                    >{{ value }}%</span
                  ></span
                >
              </v-progress-circular>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card-text class="text-center text-sm-left">
        <v-btn
          color="deep-purple accent-4"
          class="text-capitalize mr-3"
          @click="paddiPay.dialog = true"
          dark
          large
          depressed
          >Buy Now</v-btn
        >
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from "vuex"
export default {
  data: () => ({
    rating: 3.5,
    value: 60,
  }),

  computed: {
    ...mapState(["paddiPay"]),

    detailsCard() {
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
    detailsCardMode() {
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
    detailsCardTextClass() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "d-flex justify-center"
        case "sm":
          return "d-flex justify-start"
        case "md":
          return "d-flex justify-start"
        case "lg":
          return "d-flex justify-start"
        case "xl":
          return "d-flex justify-start"
      }
    },
  },
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
