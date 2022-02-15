<template>
  <vs-dialog
    blur
    not-center
    width="350"
    prevent-close
    v-model="transaction.viewDetailsDialoge"
  >
    <template #header>
      <h4 class="not-margin">Transaction Details</h4>
      <p class="text-caption grey--text text--darken-1 font-weight-regular">
        Product id:
        <span
          class="blue--text text-body-2 font-weight-regular font-weight-bold"
          >{{ transaction.selectedTransaction.code }}</span
        >
      </p>
    </template>

    <div class="d-flex flex-column">
      <vs-table class="mb-4 white">
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
            <vs-td> ₦ {{ transaction.selectedTransaction.price }} </vs-td>
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
      </v-system-bar>
    </div>
  </vs-dialog>
</template>

<script>
// @ts-nocheck
import { mapState } from "vuex"
export default {
  data: () => ({}),
  computed: {
    ...mapState(["transaction"]),
  },
}
</script>
