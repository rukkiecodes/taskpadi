<template>
  <v-card flat>
    <v-data-table
      :headers="headers"
      :items="transactions"
      :items-per-page="5"
      :search="goods_products.search"
      sort-by="product_name"
      class="grey--text text--darken-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Transactions Summary</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            dense
            outlined
            clearable
            label="Search"
            v-model="goods_products.search"
            :search="goods_products.search"
            class="mx-4 mt-5 rounded-lg"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:item.product_status="{ item }">
        <v-chip
          color="transparent"
          :class="{
            'orange--text text--lighten-1 font-weight-bold': item.product_status == 'Pending',
          }"
        >
          {{ item.product_status }}
        </v-chip>
      </template>
      <template v-slot:item.product_action="{ item }">
        <v-btn icon @click="check_item(item)">
          <v-icon small>{{ item.product_action }}</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import headers from "./data/headers";
import transactions from "./data/transactions";
export default {
  data: () => ({
    headers,
    transactions,
  }),

  methods: {
    check_item(item) {
      console.log(item);
    },
  },

  computed: {
    ...mapState(["goods_products"]),
    goods_products: {
      get() {
        return this.$store.state.goods_products;
      },
      set(new_value) {
        this.$store.state.goods_products = new_value;
      },
    },
  },
};
</script>
