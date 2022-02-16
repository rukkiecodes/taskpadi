<template>
  <v-col cols="12" sm="6" lg="4">
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <v-card height="300" color="#F8F8FB" class="rounded-lg" flat>
          <v-img
            contain
            height="300"
            :src="product.selectedTransaction.image"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["product"]),
  },
}
</script>
