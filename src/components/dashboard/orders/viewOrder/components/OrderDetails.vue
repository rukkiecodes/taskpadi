<template>
  <v-col cols="12" sm="6" lg="8">
    <div v-for="(order, i) in orders.order.product" :key="i">
      <v-card flat color="transparent">
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold text-capitalize">{{ order.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card flat color="transparent">
        <v-card flat color="transparent">
          <v-card-title class="text-body-1 pb-0">Description</v-card-title>
          <v-card-text>
            {{ order.description }}
          </v-card-text>
          <v-list dense class="px-0" color="transparent">
            <v-list-item dense class="px-1">
              <v-list-item-content class="ml-3">
                <v-list-item-title><span class="font-weight-bold">Price:</span> ₦{{
                    order.total
                }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item dense class="px-1">
              <v-list-item-content class="ml-3">
                <v-list-item-title><span class="font-weight-bold">Quantity:</span>
                  {{ order.quantity }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card flat :color="detailsCard" :dark="detailsCardMode">
          <v-card-title class="text-body-1 font-weight-medium" :class="detailsCardTextClass">Merchant's Details
          </v-card-title>
        </v-card>

        <v-divider />

        <v-card flat :key="i" color="transparent" class="text-center d-flex flex-column"
          v-for="(merchant, i) in order.merchant">
          <v-card-title class="text-subtitle-1 font-weight-medium">
            <vs-avatar>
              <img :src="merchant.avatar" />
            </vs-avatar>
            <span class="ml-4">{{ merchant.firstname }} {{ merchant.lastname }}</span>

            <v-spacer />

            <v-chip small label class="text-capitalize rounded-lg font-weight-bold" :class="{
              'orange lighten-5 orange--text text--accent-3':
                order.status == 'pending',
              'teal lighten-5 teal--text text--darken-1':
                order.status == 'active',
              'deep-purple lighten-5 deep-purple--text text--darken-1':
                order.status == 'ongoing',
            }">
              {{ order.status }}
            </v-chip>
          </v-card-title>

          <v-card-text class="text-left text-sm-left px-0">
            <v-list dense class="px-0" color="transparent">
              <v-list-item dense class="px-1">
                <v-list-item-content class="ml-3">
                  <v-list-item-title><span class="font-weight-bold">Location:</span>
                    {{ merchant.lga }},
                    {{ merchant.country }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-card flat color="transparent" class="text-center d-flex flex-column">
          <v-card-title class="text-subtitle-1 font-weight-medium py-0">
            <v-card-title class="text-body-1 font-weight-medium" :class="detailsCardTextClass">Order Details
            </v-card-title>

            <v-spacer />

            <v-chip small label class="text-capitalize rounded-lg font-weight-bold" :class="{
              'orange lighten-5 orange--text text--accent-3':
                orders.order.order.status == 'pending',
              'teal lighten-5 teal--text text--darken-1':
                orders.order.order.status == 'approved',
            }">
              {{ orders.order.order.status }}
            </v-chip>
          </v-card-title>
        </v-card>
        <v-divider />

        <v-card flat class="d-flex flex-column" color="transparent">
          <v-card-text class="text-sm-left">
            <p class="grey--text text--darken-4 mt-n2 d-flex">
              <v-icon small color="amber">mdi-star-circle</v-icon>
              Order code: <span class="font-weight-bold ml-2">{{ orders.order.order._id }}</span>
            </p>
            <p class="grey--text text--darken-4 mt-n2 d-flex">
              <v-icon small color="amber">mdi-star-circle</v-icon>
              Buyer email: <span class="font-weight-bold ml-2">{{ orders.order.order.buyerEmail }}</span>
            </p>
            <p class="grey--text text--darken-4 mt-n2 d-flex">
              <v-icon small color="amber">mdi-star-circle</v-icon>
              Buyer phone: <span class="font-weight-bold ml-2">{{ orders.order.order.buyerPhone }}</span>
            </p>
            <p class="grey--text text--darken-4 mt-n2">
              <v-icon small color="amber">mdi-star-circle</v-icon>
              Quantity:
              <span class="font-weight-bold ml-2">{{ orders.order.order.quantity }}</span>
            </p>
            <p class="grey--text text--darken-4 mt-2">
              <v-icon small color="amber">mdi-star-circle</v-icon>
              Price:
              <span class="font-weight-bold ml-2">₦{{ orders.order.order.price }}</span>
            </p>
            <p class="grey--text text--darken-4 mt-n2">
              <v-icon small color="amber">mdi-star-circle</v-icon>
              Charge:
              <span class="font-weight-bold ml-2">₦{{ orders.order.order.charge }}</span>
            </p>
            <p class="grey--text text--darken-4 mt-n2">
              <v-icon small color="amber">mdi-star-circle</v-icon>
              Total:
              <span class="font-weight-bold ml-2">₦{{ orders.order.order.totalCost }}</span>
            </p>
          </v-card-text>
        </v-card>

        <v-card-text class="text-center text-sm-left d-flex flex-column flex-sm-row">
          <vs-button @click="verifyOrder(orders.order.order.reference)" :loading="orders.verifyOrderLoading" flat
            color="#6200EA" class="text-capitalize">
            Verify order
          </vs-button>
        </v-card-text>
      </v-card>
    </div>
  </v-col>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"
export default {
  methods: {
    ...mapActions(["verifyOrder"]),
  },

  computed: {
    ...mapState(["orders"]),

    ...mapGetters(["singleOrder"]),

    detailsCard () {
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
    detailsCardMode () {
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
    detailsCardTextClass () {
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
