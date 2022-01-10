<template>
  <v-container class="mt-10">
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <v-card flat color="transparent">
          <v-data-table
            :search="search"
            :headers="header"
            :page.sync="page"
            :items="transaction"
            hide-default-footer
            :mobile-breakpoint="0"
            class="elevation-0 transparent"
            :items-per-page="itemsPerPage"
            @page-count="pageCount = $event"
          >
            <template v-slot:top>
              <v-toolbar flat dense color="transparent">
                <v-spacer />
                <v-spacer />
                <v-spacer />
                <v-text-field
                  dense
                  outlined
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
            <template v-slot:item.productStatus="{ item }">
              <v-chip
                color="transparent"
                :class="{
                  'success--text font-weight-bold':
                    item.productStatus == 'Successful',
                  'primary--text font-weight-bold':
                    item.productStatus == 'Pending',
                }"
                class="px-0"
                v-text="item.productStatus"
              />
            </template>
            <template v-slot:item.productAction="{ item }">
              <v-btn @click="viewData(item)" icon>
                <v-icon small v-text="item.productAction" />
              </v-btn>
            </template>
          </v-data-table>
          <div class="text-center pt-2">
            <v-pagination
              v-model="page"
              :length="pageCount"
              color="deep-purple accent-4"
            ></v-pagination>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import header from "./data/header"
import transaction from "./data/transaction"
export default {
  data: () => ({
    search: "",
    header,
    transaction,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
  }),
  methods: {
    viewData(item) {
      console.log(item)
    },
  },
}
</script>
