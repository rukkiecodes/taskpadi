<template>
  <v-col cols="12" sm="6" lg="8">
    <div :key="i" v-for="(product, i) in singleProduct">
      <v-card flat color="transparent">
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold text-capitalize"
                >{{ product.name }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card flat color="transparent">
        <v-card flat color="transparent">
          <v-card-title class="text-body-1 pb-0">Description</v-card-title>
          <v-card-text>
            {{ product.description }}
          </v-card-text>
          <v-list dense class="px-0" color="transparent">
            <v-list-item dense class="px-1">
              <v-list-item-content class="ml-3">
                <v-list-item-title
                  ><span class="font-weight-bold">Price:</span> ₦{{
                    product.total
                  }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item dense class="px-1">
              <v-list-item-content class="ml-3">
                <v-list-item-title
                  ><span class="font-weight-bold">Quantity:</span>
                  {{ product.quantity }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card flat :color="detailsCard" :dark="detailsCardMode">
          <v-card-title
            class="text-body-1 font-weight-medium"
            :class="detailsCardTextClass"
            >Merchant's Details</v-card-title
          >
        </v-card>

        <v-divider />

        <v-card
          flat
          :key="i"
          color="transparent"
          class="text-center d-flex flex-column"
          v-for="(merchant, i) in product.merchant"
        >
          <v-card-title class="text-subtitle-1 font-weight-medium">
            <vs-avatar>
              <img :src="merchant.avatar" />
            </vs-avatar>
            <span class="ml-4"
              >{{ merchant.firstname }} {{ merchant.lastname }}</span
            >

            <v-spacer />

            <v-chip
              small
              label
              class="text-capitalize rounded-lg font-weight-bold"
              :class="{
                'orange lighten-5 orange--text text--accent-3':
                  product.status == 'pending',
                'teal lighten-5 teal--text text--darken-1':
                  product.status == 'active',
                'deep-purple lighten-5 deep-purple--text text--darken-1':
                  product.status == 'ongoing',
              }"
            >
              {{ product.status }}
            </v-chip>
          </v-card-title>

          <v-card-text class="text-center text-sm-left px-0">
            <v-list dense class="px-0" color="transparent">
              <v-list-item dense class="px-1">
                <v-list-item-content class="ml-3">
                  <v-list-item-title
                    ><span class="font-weight-bold">Location:</span>
                    {{ merchant.lga }},
                    {{ merchant.country }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-card-text class="text-center text-sm-left">
          <vs-button
            flat
            color="#6200EA"
            @click="openEditProductDialog(product)"
          >
            Edit product
          </vs-button>
        </v-card-text>
      </v-card>
    </div>

    <EditProduct />
  </v-col>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    rating: 3.5,
    value: 60,
  }),

  components: {
    EditProduct: () => import("../../components/EditProduct.vue"),
  },

  methods: {
    ...mapActions(["openEditProductDialog"]),
  },

  computed: {
    ...mapGetters(["singleProduct"]),
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
