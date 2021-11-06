<template>
  <v-col cols="12">
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

        <span class="deep-purple--text text--accent-4 text-body-2 font-weight-bold"
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
  </v-col>
</template>

<script>
export default {}
</script>
