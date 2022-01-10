<template>
  <v-dialog
    v-model="viewDetailsDialog.dialog"
    persistent
    scrollable
    width="450"
  >
    <v-card>
      <v-card-title class="text-h6 font-weight-regular">
        Transaction Details
        <v-spacer />
        <v-btn
          icon
          plain
          color="grey darken-4"
          @click="viewDetailsDialog.dialog = !viewDetailsDialog.dialog"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />

      <v-card-text class="pa-0">
        <v-card-text class="mt-5 pb-0">
          Product id:
          <router-link class="text-decoration-none" to="/dashboard/yourPaddiDashboard"
            >#SK2540</router-link
          >
        </v-card-text>
        <v-card-text class="pt-0">
          Billing Name:
          <router-link class="text-decoration-none" to="/dashboard/yourPaddiDashboard"
            >Neal Matthews</router-link
          >
        </v-card-text>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Product
                  </th>
                  <th class="text-left">
                    Product Name
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.product">
                  <td>
                    <v-avatar color="transparent" tile>
                      <img :src="item.product" alt="" />
                    </v-avatar>
                  </td>
                  <td>{{ item.productName }}</td>
                  <td>{{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>

        <v-card-text class="py-2">
          <v-system-bar color="transparent">
            Sub Total:
            <v-spacer />
            $ 400
          </v-system-bar>
        </v-card-text>
        <v-divider />
        <v-card-text class="py-2">
          <v-system-bar color="transparent">
            Shipping:
            <v-spacer />
            Free
          </v-system-bar>
        </v-card-text>
        <v-divider />
        <v-card-text class="py-2">
          <v-system-bar color="transparent">
            Total:
            <v-spacer />
            $ 400
          </v-system-bar>
        </v-card-text>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          dark
          depressed
          color="grey darken-3"
          @click="viewDetailsDialog.dialog = !viewDetailsDialog.dialog"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// @ts-nocheck
import { mapState } from "vuex"
export default {
  data: () => ({
    desserts: [
      {
        product: require("../../assets/trust/img-4.png"),
        productName: "Phone patterned cases",
        price: "$ 145",
      },
    ],
  }),
  computed: {
    ...mapState(["viewDetailsDialog"]),
  },
}
</script>
