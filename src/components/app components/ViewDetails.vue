<template>
  <vs-dialog not-center width="350" v-model="viewDetailsDialog.dialog">
    <template #header>
      <h4 class="not-margin">Transaction Details</h4>
    </template>

    <div class="d-flex flex-column">
      <p class="text-body-2 grey--text text--darken-1 font-weight-regular">
        Product id:
        <span class="blue--text">#SK2540</span>
      </p>
      <p class="text-body-2 grey--text text--darken-1 font-weight-regular">
        Billing Name:
        <span class="blue--text">Name</span>
      </p>

      <vs-table class="my-4">
        <template #thead>
          <vs-tr>
            <vs-th> Image </vs-th>
            <vs-th> Product Name </vs-th>
            <vs-th> Price </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr v-for="(item, i) in desserts" :key="i" :data="item">
            <vs-td>
              <vs-avatar color="transparent">
                <img :src="item.product" alt="" />
              </vs-avatar>
            </vs-td>
            <vs-td>
              {{ item.productName }}
            </vs-td>
            <vs-td>
              {{ item.price }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>

      <v-system-bar class="mb-3 text-body-2" color="transparent">
        Sub Total:
        <v-spacer />
        $ 400
      </v-system-bar>

      <v-system-bar class="mb-3 text-body-2" color="transparent">
        Shipping:
        <v-spacer />
        Free
      </v-system-bar>

      <v-system-bar class="text-body-2" color="transparent">
        Total:
        <v-spacer />
        $ 400
      </v-system-bar>
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
