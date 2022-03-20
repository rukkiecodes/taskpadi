<template>
  <vs-table class="white">
    <template #thead>
      <vs-tr class="white">
        <vs-th class="white"> IDs </vs-th>
        <vs-th class="white"> Phone number </vs-th>
        <vs-th class="white"> Type </vs-th>
        <vs-th class="white"> Price </vs-th>
        <vs-th class="white"> Duration </vs-th>
        <vs-th class="white"> Status </vs-th>
        <vs-th class="white"> View </vs-th>
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
        <vs-td>
          {{ transaction.recipientPhone }}
        </vs-td>
        <vs-td>
          {{ transaction.type }}
        </vs-td>
        <vs-td> ₦{{ transaction.price }} </vs-td>
        <vs-td>
          {{ transaction.duration }}
        </vs-td>
        <vs-td>
          <v-chip
            small
            label
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
          </v-chip>
        </vs-td>
        <vs-td>
          <div class="d-flex">
            <vs-button icon transparent class="mr-2" color="#1CC8EE">
              <i class="las la-reply"></i>
            </vs-button>
            <vs-button
              icon
              transparent
              color="#2A00A2"
              @click="viewTransactionDetails(transaction)"
            >
              <i class="lar la-eye"></i>
            </vs-button>
          </div>
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
</template>

<script>
// @ts-nocheck
import UpdateTransaction from "../UpdateTransaction.vue"
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    page: 1,
    max: 7,
    pageCount: 0,
    itemsPerPage: 8,
    fab: true,
  }),

  components: {
    UpdateTransaction,
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
    })
  },

  methods: {
    ...mapActions([
      "viewTransactionDetails",
      "openUpdateTransactionDialog",
      "openConfirmTransactionDialog",
      "openDeclineTransactionDialog",
      "openPopTransactionDialog",
      "openDeleteTransactionDialog",
    ]),
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["transactions"]),
  },
}
</script>
