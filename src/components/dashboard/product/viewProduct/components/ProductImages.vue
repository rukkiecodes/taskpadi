<template>
  <v-col cols="12" sm="6" lg="4">
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <v-card
          flat
          :key="i"
          height="300"
          color="#F8F8FB"
          max-height="400"
          v-for="(product, i) in singleProduct"
        >
          <img
            style="width: 100%"
            :src="product.image"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(["singleProduct"]),
  },
}
</script>
