<template>
  <v-col cols="12" sm="8" class="px-0 px-sm-4">
    <vs-table class="white rounded-xl">
      <template #header>
        <vs-input block placeholder="Search transactions" v-model="transaction.search">
          <template #icon>
            <i class="las la-search"></i>
          </template>
        </vs-input>
      </template>
      <template class="white" #thead>
        <vs-tr class="white">
          <vs-th class="white"> Id </vs-th>
          <vs-th class="white"> Price </vs-th>
          <vs-th class="white"> Type </vs-th>
          <vs-th class="white"> Status </vs-th>
          <vs-th class="white"> Action </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          :data="transaction"
          v-for="(transaction, i) in $vs.getPage(
            $vs.getSearch(transactions, transaction.search),
            page,
            max
          )"
        >
          <vs-td>
            {{ transaction.code }}
          </vs-td>
          <vs-td> ₦ {{ transaction.price }} </vs-td>
          <vs-td>
            {{ transaction.type }}
          </vs-td>
          <vs-td>
            <v-btn
              dark
              small
              depressed
              class="text-capitalize rounded-lg"
              :class="{
                'orange lighten-5 orange--text text--accent-3':
                  transaction.status == 'pending',
                'teal lighten-5 teal--text text--darken-1':
                  transaction.status == 'completed',
                'deep-purple lighten-5 deep-purple--text text--darken-1':
                  transaction.status == 'ongoing',
              }"
            >
              {{ transaction.status }}
            </v-btn>
          </vs-td>
          <vs-td>
            <vs-button
              icon
              transparent
              color="#2A00A2"
              @click="viewTransactionDetails(transaction)"
            >
              <i class="lar la-eye"></i>
            </vs-button>
          </vs-td>
        </vs-tr>
      </template>

      <template #footer>
        <vs-pagination
          v-model="page"
          color="#6200EA"
          :length="
            $vs.getLength($vs.getSearch(transactions, transaction.search), max)
          "
        />
      </template>
    </vs-table>
    <ViewDetails />
  </v-col>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    search: "",
    page: 1,
    max: 7,
  }),

  components: {
    ViewDetails: () => import("./ViewDetails.vue"),
  },

  mounted() {
    this.$nextTick(() => {
      const tb = document.querySelectorAll(".vs-table__td")

      if (tb) {
        for (let i = 0; i <= tb.length - 1; i++) {
          setTimeout(() => {
            tb[i].style.padding = "0 8px"
          }, 100)
        }
      }

      const footer = document.querySelector(".vs-table__footer")

      if (footer) {
        footer.style.background = "none"
      }

      const header = document.querySelector(".vs-table__header")

      if (header) {
        header.style.background = "none"
      }
    })
  },

  methods: {
    ...mapActions(["viewTransactionDetails", "viewTransactionDetails"]),
  },

  computed: {
    ...mapState(["viewDetailsDialog", "transaction"]),
    ...mapGetters(["transactions"]),
    tableWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "600px"
        case "sm":
          return 400
        case "md":
          return 500
        case "lg":
          return 600
        case "xl":
          return 800
      }
    },
  },
}
</script>
