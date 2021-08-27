<template>
  <v-card flat>
    <v-data-table
      :search="search"
      :items="ticket"
      :headers="headers"
      :items-per-page="10"
      sort-by="transaction_ID"
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
              item.product_status == 'Resolved',
            'orange--text text--lighten-1 font-weight-bold':
              item.product_status == 'Pending',
            'indigo--text text--accent-4 font-weight-bold':
              item.product_status == 'Ongoig',
          }"
          class="px-0"
        >
          {{ item.product_status }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import headers from "./data/headers";
import ticket from "./data/ticket";
export default {
  data: () => ({
    search: "",
    headers,
    ticket,
  }),
  methods: {
    check_item(item) {
      console.log(item);
    },
  },
};
</script>
