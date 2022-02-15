<template>
  <v-container>
    <AddNewProduct class="mb-5" />

    <ProductTable class="white mt-10" />

    <EditProduct />
  </v-container>
</template>

<script>
import ProductTable from "./ProductTable.vue"
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    active: "GoodAndProducts",
    showGoodAndProduct: true,
  }),

  components: {
    ProductTable,
    AddNewProduct: () => import("./AddNewProduct.vue"),
    EditProduct: () => import("./EditProduct.vue"),
  },

  mounted() {
    this.$nextTick(() => {
      this.getProducts()
      this.active = "GoodAndProducts"
      const tab = document.querySelector(".v-slide-group__content")

      if (tab) {
        tab.style.overflowX = "auto"
        tab.style.overflowY = "hidden"
      }
    })
  },

  methods: {
    ...mapActions(["getProducts"]),

    checkList(item) {
      if (item.title == "All") {
        this.transaction.search = ""
      } else {
        this.transaction.search = item.title
      }
    },
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["transactionFilters"]),
  },
}
</script>

<style>
.v-slide-group__content::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
</style>
