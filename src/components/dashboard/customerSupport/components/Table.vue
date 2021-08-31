<template>
  <v-col cols="12">
    <v-data-table
      :headers="header"
      :items="transaction"
      :search="search"
      :items-per-page="10"
      class="elevation-0"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-text-field
            dense
            clearable
            hide-details
            label="Search"
            v-model="search"
            :search="search"
            color="deep-purple accent-4"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip
          color="transparent"
          :class="{
            'success--text font-weight-bold': item.status == 'Successful',
            'primary--text font-weight-bold': item.status == 'Pending',
            'warning--text font-weight-bold': item.status == 'Ongoing',
          }"
          class="px-0"
          v-text="item.status"
        />
      </template>
      <template v-slot:item.productAction="{ item }">
        <v-btn @click="viewData(item)" icon>
          <v-icon small v-text="item.productAction" />
        </v-btn>
      </template>
    </v-data-table>
  </v-col>
</template>

<script>
import header from "./data/header";
import transaction from "./data/transaction";
export default {
  data: () => ({
    search: "",
    header,
    transaction,
  }),
  methods: {
    viewData(item) {
      console.log(item);
      console.log(item.status);
    },
  },
};
</script>
