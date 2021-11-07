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

      <v-card-text class="d-flex justify-start align-center py-0 pl-2 my-0">
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
      <v-card-text>
        The GORE-TEX lining, large lugs on the outsole and removable silicone
        ankle strap toughen up the icon while the padded, high-cut collar keeps
        the heritage b-ball look and hardwood comfort. Size 45
      </v-card-text>
      <v-card flat color="transparent">
        <v-card-title class="text-body-1 font-weight-medium"
          >Merchant’s Details :</v-card-title
        >
      </v-card>
      <v-divider />
      <v-card flat color="transparent">
        <v-card-title class="text-subtitle-1 font-weight-medium">
          <v-avatar class="white--text mr-3" color="grey darken-2">AZ</v-avatar>
          AZ Ventures

          <v-spacer />

          <span
            class="deep-purple--text text--accent-4 text-body-2 font-weight-bold"
            >Verified</span
          >
        </v-card-title>

        <v-card-text>
          <v-card
            width="250"
            class="d-flex justify-start align-center ma-0 pa-0"
            color="transparent"
            flat
          >
            <span>Trust Level :</span>
            <v-slider
              hide-details
              max="100"
              :thumb-size="0"
              min="0"
              value="60"
              height="0"
              color="deep-purple accent-4"
              thumb-color="transparent"
              readonly
            ></v-slider>
          </v-card>

          <p class="grey--text text--darken-4 mt-2">
            Location : <span class="font-weight-bold">Yaba, Lagos</span>
          </p>
          <p class="grey--text text--darken-4 mt-n2">
            Category : <span class="font-weight-bold">Fashion</span>
          </p>
        </v-card-text>
      </v-card>

      <v-card-text>
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
import { mapState } from 'vuex'
export default {
  data: () => ({
    rating: 3.5,
  }),

  computed: {
    ...mapState(["paddiPay"])
  }
}
</script>
