<template>
  <vs-dialog not-center v-model="product.viewDetailsDialoge">
    <template #header>
      <h4 class="not-margin">Product Details</h4>
      <p class="text-caption grey--text text--darken-1 font-weight-regular">
        Product id:
        <span
          class="blue--text text-body-2 font-weight-regular font-weight-bold"
          >{{ product.selectedTransaction.slug }}</span
        >
      </p>
    </template>

    <div class="d-flex flex-column">
      <vs-table>
        <template #thead>
          <vs-tr class="white">
            <vs-th class="white"></vs-th>
            <vs-th class="white">Product name</vs-th>
            <vs-th class="white">Price</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :data="product.selectedTransaction">
            <vs-td>
              <vs-avatar>
                <img :src="product.selectedTransaction.image" alt="" />
              </vs-avatar>
            </vs-td>
            <vs-td>
              {{ product.selectedTransaction.name }}
            </vs-td>
            <vs-td> ₦{{ product.selectedTransaction.initialPrice }} </vs-td>
          </vs-tr>
        </template>
      </vs-table>

      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Sub Total</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action-text
            >₦{{
              product.selectedTransaction.initialPrice
            }}</v-list-item-action-text
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Charges</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action-text
            >₦{{
              product.selectedTransaction.transactionCharge
            }}</v-list-item-action-text
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Total</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action-text
            >₦{{
              product.selectedTransaction.finalPrice
            }}</v-list-item-action-text
          >
        </v-list-item>
      </v-list>
      <!-- <vs-table class="mb-4 white">
        <template #thead>
          <vs-tr class="white">
            <vs-th class="white"> Image </vs-th>
            <vs-th class="white"> Buyer email </vs-th>
            <vs-th class="white"> Seller email </vs-th>
            <vs-th class="white"> Price </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr data="transaction.selectedTransaction">
            <vs-td>
              <vs-avatar color="transparent">
                <img :src="transaction.selectedTransaction.image" alt="" />
              </vs-avatar>
            </vs-td>
            <vs-td>
              {{ transaction.selectedTransaction.buyerEmail }}
            </vs-td>
            <vs-td>
              {{ transaction.selectedTransaction.sellerEmail }}
            </vs-td>
            <vs-td>
              ₦ {{ transaction.selectedTransaction.price }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>

      <v-system-bar class="mb-3 text-body-2" color="transparent">
        Sub Total:
        <v-spacer />
        ₦ 400
      </v-system-bar>

      <v-system-bar class="mb-3 text-body-2" color="transparent">
        Shipping:
        <v-spacer />
        Free
      </v-system-bar>

      <v-system-bar class="text-body-2" color="transparent">
        Total:
        <v-spacer />
        ₦ {{ transaction.selectedTransaction.price }}
      </v-system-bar> -->
    </div>
  </vs-dialog>
</template>

<script>
// @ts-nocheck
import { mapState } from "vuex"
export default {
  data: () => ({
    desserts: [
      {
        product: require("../../../assets/trust/img-4.png"),
        productName: "Phone patterned cases",
        price: "$ 145",
      },
    ],
  }),
  computed: {
    ...mapState(["product"]),
  },
}
</script>
