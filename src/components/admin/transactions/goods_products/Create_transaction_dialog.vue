<template>
  <v-dialog v-model="goods_products.dialog" max-width="500px">
    <v-card flat>
      <v-card-title>
        <span class="text-h5 grey--text text--darken-4" v-text="formTitle" />
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
                v-model="edited_item.SN"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                dense
                outlined
                color="blue accent-4"
                label="Product Name"
                v-model="edited_item.product_name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                dense
                outlined
                color="blue accent-4"
                v-model="edited_item.product_type"
                label="Product Type"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                dense
                outlined
                color="blue accent-4"
                v-model="edited_item.product_quantity"
                label="Quantity"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                dense
                outlined
                color="blue accent-4"
                v-model="edited_item.product_amount"
                label="Amount"
              ></v-text-field>
            </v-col>
            <!-- START DATE -->
            <v-col cols="12" sm="6">
              <v-menu
                ref="start_date_menu"
                v-model="start_date_menu"
                :close-on-content-click="false"
                :return-value.sync="edited_item.start_date"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="edited_item.start_date"
                    label="Start date"
                    dense
                    outlined
                    color="blue accent-4"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="edited_item.start_date"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="start_date_menu = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.start_date_menu.save(edited_item.start_date)"
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
                :return-value.sync="edited_item.end_date"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="edited_item.end_date"
                    label="End date"
                    dense
                    outlined
                    color="blue accent-4"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="edited_item.end_date"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="end_date_menu = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.end_date_menu.save(edited_item.end_date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="edited_item.product_status"
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
</template>

<script>
import { mapState } from "vuex";
import headers from "./components/ongoing/data/headers";
import transactions from "./components/ongoing/data/transactions";
import edited_item from "./components/ongoing/data/edited_item";
import default_item from "./components/ongoing/data/default_item";
export default {
  data: () => ({
    headers,
    transactions,
    start_date_menu: false,
    end_date_menu: false,
    edited_index: -1,
    edited_item,
    default_item,
  }),
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  methods: {
    close() {
      this.goods_products.dialog = false;
      this.$nextTick(() => {
        this.edited_item = Object.assign({}, this.default_item);
        this.edited_index = -1;
      });
    },

    save() {
      if (this.edited_index > -1) {
        Object.assign(this.transactions[this.edited_index], this.edited_item);
      } else {
        this.transactions.push(this.edited_item);
      }
      this.close();
    },
  },
  computed: {
    formTitle() {
      return this.edited_index === -1
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
