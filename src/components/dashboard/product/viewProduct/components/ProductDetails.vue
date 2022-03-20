<template>
  <v-col cols="12" sm="6" lg="8">
    <v-card flat color="transparent">
      <v-list color="transparent">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold text-capitalize"
              >{{ product.selectedTransaction.name }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card flat color="transparent">
      <v-card-title>
        <span class="text-h6 font-weight-medium">Description:</span>
        <v-spacer />
        <span class="text-h4 font-weight-bold"
          >₦{{ product.selectedTransaction.initialPrice }}</span
        >
      </v-card-title>

      <v-card-text class="text-center text-sm-left">{{
        product.selectedTransaction.description
      }}</v-card-text>
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
          <vs-avatar>
            <img :src="product.selectedTransaction.seller.image" alt="" />
          </vs-avatar>
          <span class="ml-4">{{
            product.selectedTransaction.seller.fullName
          }}</span>

          <v-spacer />

          <v-chip
            small
            label
            class="text-capitalize rounded-lg font-weight-bold"
            :class="{
              'orange lighten-5 orange--text text--accent-3':
                product.selectedTransaction.seller.status == 'inactive',
              'teal lighten-5 teal--text text--darken-1':
                product.selectedTransaction.seller.status == 'active',
              'deep-purple lighten-5 deep-purple--text text--darken-1':
                product.selectedTransaction.seller.status == 'ongoing',
            }"
          >
            {{ product.selectedTransaction.seller.status }}
          </v-chip>
        </v-card-title>

        <v-card-text class="text-center text-sm-left">
          <v-row
            no-gutters
            align="center"
            justify="space-between"
            class="flex-column-reverse flex-sm-row"
          >
            <v-col cols="12" sm="6">
              <p class="grey--text text--darken-4 mt-2">
                <v-icon small color="amber">mdi-star-circle</v-icon> Location:
                <span class="font-weight-bold"
                  >{{ product.selectedTransaction.seller.lga }},
                  {{ product.selectedTransaction.seller.country }}</span
                >
              </p>
              <p class="grey--text text--darken-4 mt-n2">
                <v-icon small color="amber">mdi-star-circle</v-icon> Category:
                <span class="font-weight-bold">{{
                  product.selectedTransaction.seller.type
                }}</span>
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card-text class="text-center text-sm-left">
        <vs-button
          flat
          color="#6200EA"
          @click="openEditProductDialog(product.selectedTransaction)"
        >
          Edit product
        </vs-button>
      </v-card-text>
    </v-card>
    <EditProduct />
  </v-col>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    rating: 3.5,
    value: 60,
  }),

  components: {
    EditProduct: () => import("../../components/EditProduct.vue")
  },

  methods: {
    ...mapActions(["openEditProductDialog"]),
  },

  computed: {
    ...mapState(["product"]),

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
