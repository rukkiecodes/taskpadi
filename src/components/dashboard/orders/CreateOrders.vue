<template>
  <div>
    <div class="d-flex">
      <vs-button icon flat active color="#6200EA" @click="$router.go(-1)" v-show="$route.params._id">
        <i class="las la-arrow-left"></i>
      </vs-button>
      <vs-button flat active color="#6200EA" style="font-weight: bold" v-show="!$route.params._id"
        @click="orders.createOrderDialog = true">
        Create order
      </vs-button>
    </div>

    <vs-dialog scroll blur not-center width="400px" prevent-close overflow-hidden v-model="orders.createOrderDialog">
      <template #header>
        <h4 class="not-margin">Create order</h4>
      </template>

      <div class="con-content">
        <v-row justify="space-between" align="start">
          <v-col cols="12">
            <vs-input block placeholder="Product id" v-model="orders.createOrderCredential.productId" />
          </v-col>
          <v-col cols="12">
            <vs-input block placeholder="Buyer email" v-model="orders.createOrderCredential.buyerEmail" />
          </v-col>
          <v-col cols="12">
            <vs-input block placeholder="Buyer phone" v-model="orders.createOrderCredential.buyerPhone" />
          </v-col>
          <v-col cols="12">
            <vs-input block placeholder="Seller id" v-model="orders.createOrderCredential.sellerId" />
          </v-col>
          <v-col cols="12">
            <vs-input block placeholder="Quantity" v-model="orders.createOrderCredential.quantity" />
          </v-col>
        </v-row>
      </div>

      <template #footer>
        <div class="con-footer">
          <v-spacer />
          <div class="con-footer d-flex justify-end">
            <vs-button dark transparent class="font-weight-bold grey--text text--darken-4"
              @click="orders.createOrderDialog = false">
              Cancel
            </vs-button>
            <vs-button color="#6200EA" class="font-weight-bold" @click="createOrder"
              :loading="orders.createOrderLoading">
              Create order</vs-button>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    max: 180,
    rules: [(v) => v.length <= 180 || "Max 25 characters"],
  }),

  mounted () {
    this.$nextTick(() => {
      this.getOrders()
    })
  },

  methods: {
    ...mapActions(["createOrder", "getOrders"]),
  },

  computed: {
    ...mapState(["orders"]),
  },
}
</script>

<style>
</style>