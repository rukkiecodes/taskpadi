<template>
  <v-card flat>
    <v-data-table
      :headers="headers"
      :items="transactions"
      :items-per-page="5"
      :search="search"
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
            v-model="search"
            :search="search"
            class="mx-4 mt-5 rounded-lg"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
          <v-dialog v-model="goods_products.dialog" max-width="500px">
            <v-card flat>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        dense
                        outlined
                        color="blue accent-4"
                        label="Sirial Number"
                        v-model="editedItem.SN"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        dense
                        outlined
                        color="blue accent-4"
                        label="Product Name"
                        v-model="editedItem.product_name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        dense
                        outlined
                        color="blue accent-4"
                        v-model="editedItem.product_type"
                        label="Product Type"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        dense
                        outlined
                        color="blue accent-4"
                        v-model="editedItem.product_quantity"
                        label="Quantity"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        dense
                        outlined
                        color="blue accent-4"
                        v-model="editedItem.product_amount"
                        label="Amount"
                      ></v-text-field>
                    </v-col>
                    <!-- START DATE -->
                    <v-col cols="12" sm="6">
                      <v-menu
                        ref="start_date_menu"
                        v-model="start_date_menu"
                        :close-on-content-click="false"
                        :return-value.sync="editedItem.start_date"
                        transition="scale-transition"
                        offset-y
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="editedItem.start_date"
                            label="Start date"
                            prepend-inner-icon="mdi-calendar"
                            dense
                            outlined
                            color="blue accent-4"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="editedItem.start_date"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            color="primary"
                            @click="start_date_menu = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="
                              $refs.start_date_menu.save(editedItem.start_date)
                            "
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <!-- END DATE -->
                    <v-col cols="12" sm="6">
                      <v-menu
                        ref="end_date_menu"
                        v-model="end_date_menu"
                        :close-on-content-click="false"
                        :return-value.sync="editedItem.end_date"
                        transition="scale-transition"
                        offset-y
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="editedItem.end_date"
                            label="End date"
                            prepend-inner-icon="mdi-calendar"
                            dense
                            outlined
                            color="blue accent-4"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="editedItem.end_date"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            color="primary"
                            @click="end_date_menu = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="
                              $refs.end_date_menu.save(editedItem.end_date)
                            "
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="editedItem.product_status"
                        label="Product status"
                        dense
                        outlined
                        color="blue accent-4"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  depressed
                  @click="close"
                  color="grey darken-1"
                  class="rounded-lg white--text text-capitalize px-4"
                >
                  Cancel
                </v-btn>
                <v-btn
                  depressed
                  @click="save"
                  color="blue accent-4"
                  class="rounded-lg white--text text-capitalize px-4"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.product_status="{ item }">
        <v-chip
          color="transparent"
          :class="{
            'orange--text text--lighten-1': item.product_status == 'Pending',
            'teal--text text--accent-4': item.product_status == 'Successful',
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
export default {
  data: () => ({
    search: "",
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    start_date_menu: false,
    end_date_menu: false,
    modal: false,
    menu2: false,
    headers: [
      {
        text: "S/N",
        align: "start",
        sortable: false,
        value: "SN",
      },
      { text: "Product Name", value: "product_name" },
      { text: "Product Type", value: "product_type" },
      { text: "Quantity", value: "product_quantity" },
      { text: "Amount", value: "product_amount" },
      { text: "Start Date", value: "start_date" },
      { text: "End Date", value: "end_date" },
      { text: "Status", value: "product_status" },
      { text: "View", value: "product_action", sortable: false },
    ],
    transactions: [],
    editedIndex: -1,
    editedItem: {
      SN: "",
      product_name: "",
      product_type: null,
      product_quantity: null,
      product_amount: null,
      start_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      end_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      product_status: "",
      product_action: "mdi-eye-outline",
    },
    defaultItem: {
      SN: "",
      product_name: "",
      product_type: null,
      product_quantity: null,
      product_amount: null,
      start_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      end_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      product_status: "",
      product_action: "mdi-eye-outline",
    },
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    check_item(item) {
      console.log(item);
    },
    initialize() {
      this.transactions = [
        {
          SN: "01",
          product_name: "Bag",
          product_type: 6.0,
          product_quantity: 24,
          product_amount: 4.0,
          start_date: "2021-10-12",
          end_date: "2021-10-12",
          product_status: "Pending",
          product_action: "mdi-eye-outline",
        },
        {
          SN: "02",
          product_name: "Shoe",
          product_type: 9.0,
          product_quantity: 37,
          product_amount: 4.3,
          start_date: "2021-10-04",
          end_date: "2021-10-04",
          product_status: "Successful",
          product_action: "mdi-eye-outline",
        },
        {
          SN: "03",
          product_name: "Apple",
          product_type: 16.0,
          product_quantity: 23,
          product_amount: 6.0,
          start_date: "2021-10-20",
          end_date: "2021-10-20",
          product_status: "Pending",
          product_action: "mdi-eye-outline",
        },
        {
          SN: "04",
          product_name: "IPhone X",
          product_type: 3.7,
          product_quantity: 67,
          product_amount: 4.3,
          start_date: "2021-10-14",
          end_date: "2021-10-14",
          product_status: "Successful",
          product_action: "mdi-eye-outline",
        },
        {
          SN: "05",
          product_name: "Eva wine",
          product_type: 16.0,
          product_quantity: 49,
          product_amount: 3.9,
          start_date: "2021-10-01",
          end_date: "2021-10-01",
          product_status: "Pending",
          product_action: "mdi-eye-outline",
        },
        {
          SN: "06",
          product_name: "Broiler Chicken",
          product_type: 0.0,
          product_quantity: 94,
          product_amount: 0.0,
          start_date: "2021-10-25",
          end_date: "2021-10-25",
          product_status: "Successful",
          product_action: "mdi-eye-outline",
        },
        {
          SN: "07",
          product_name: "Television",
          product_type: 0.2,
          product_quantity: 98,
          product_amount: 0,
          start_date: "2021-10-27",
          end_date: "2021-10-27",
          product_status: "Pending",
          product_action: "mdi-eye-outline",
        },
        {
          SN: "08",
          product_name: "Refridgirator",
          product_type: 3.2,
          product_quantity: 87,
          product_amount: 6.5,
          start_date: "2021-10-24",
          end_date: "2021-10-24",
          product_status: "Successful",
          product_action: "mdi-eye-outline",
        },
        {
          SN: "09",
          product_name: "Zink",
          product_type: 25.0,
          product_quantity: 51,
          product_amount: 4.9,
          start_date: "2021-10-28",
          end_date: "2021-10-28",
          product_status: "Pending",
          product_action: "mdi-eye-outline",
        },
        {
          SN: "10",
          product_name: "Gold bar",
          product_type: 26.0,
          product_quantity: 65,
          product_amount: 7,
          start_date: "2021-10-27",
          end_date: "2021-10-27",
          product_status: "Successful",
          product_action: "mdi-eye-outline",
        },
      ];
    },

    close() {
      this.goods_products.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.transactions[this.editedIndex], this.editedItem);
      } else {
        this.transactions.push(this.editedItem);
      }
      this.close();
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Create Transaction"
        : "Edit Transaction";
    },
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
