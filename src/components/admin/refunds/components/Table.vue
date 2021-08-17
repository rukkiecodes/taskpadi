<template>
  <v-card flat>
    <v-data-table
      :search="search"
      :items="refunds"
      :headers="headers"
      :items-per-page="10"
      sort-by="transaction_ID"
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
            v-model="search"
            :search="search"
            class="mx-4 mt-5 rounded-lg"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:item.product_status="{ item }">
        <v-chip
          color="transparent"
          :class="{
            'teal--text text--accent-4 font-weight-bold':
              item.product_status == 'Successful',
            'orange--text text--lighten-1 font-weight-bold':
              item.product_status == 'Pending',
          }"
        >
          {{ item.product_status }}
        </v-chip>
      </template>
      <template v-slot:item.product_action="{ item }">
        <v-btn icon @click="check_item(item)">
          <v-icon small>{{ item.product_action }}</v-icon>
        </v-btn>
      </template></v-data-table
    >
  </v-card>
</template>

<script>
import headers from "./data/headers";
import refunds from "./data/refunds";
export default {
  data: () => ({
    search: "",
    headers,
    refunds,
  }),
  methods: {
    check_item(item) {
      console.log(item);
    },
  },
};
</script>
