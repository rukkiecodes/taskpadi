<template>
  <v-card flat>
    <v-data-table
      :headers="headers"
      :items="transactions"
      :items-per-page="5"
      :search="withdrawal.search"
      sort-by="SN"
      class="grey--text text--darken-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-text-field
            dense
            outlined
            clearable
            label="Search"
            v-model="withdrawal.search"
            :search="withdrawal.search"
            class="mx-4 mt-5 rounded-lg"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:item.product_status="{ item }">
        <v-chip
          color="transparent"
          :class="{
            'blue--text text--accent-4 font-weight-bold': item.product_status == 'Successful',
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
    ...mapState(["withdrawal"]),
    withdrawal: {
      get() {
        return this.$store.state.withdrawal;
      },
      set(new_value) {
        this.$store.state.withdrawal = new_value;
      },
    },
  },
};
</script>
