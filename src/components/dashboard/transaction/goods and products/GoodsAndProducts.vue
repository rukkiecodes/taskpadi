<template>
  <vs-table class="white">
    <template #thead>
      <vs-tr class="white">
        <vs-th class="white"> ID </vs-th>
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
        <vs-td> ₦ {{ transaction.price }} </vs-td>
        <vs-td>
          {{ transaction.duration }}
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

        <template #expand>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div
              style="
                display: flex;
                justify-content: flex-start;
                align-items: center;
              "
            >
              <vs-avatar v-if="transaction.image != null">
                <img
                  :src="`https://dev.trustpaddi.com/public/storage/images/transactions/${transaction.image}`"
                  alt=""
                />
              </vs-avatar>
              <vs-avatar color="#6200EA" v-else>
                <template #text>
                  {{ transaction.recipientName.toUpperCase() }}
                </template>
              </vs-avatar>
              <p style="margin-top: 23px; margin-left: 5px">
                {{ transaction.recipientName }}
              </p>
            </div>
            <div
              style="
                display: flex;
                justify-content: flex-start;
                align-items: center;
              "
            >
              <vs-tooltip dark>
                <vs-button
                  icon
                  dark
                  transparent
                  @click="openUpdateTransactionDialog(transaction)"
                >
                  <i style="font-size: 1.3rem" class="lar la-edit"></i>
                  Edit
                </vs-button>
                <template #tooltip> Update Transaction </template>
              </vs-tooltip>
              <vs-tooltip dark>
                <vs-button
                  icon
                  dark
                  transparent
                  @click="openApprovalTransactionDialog(transaction)"
                >
                  <i style="font-size: 1.3rem" class="lar la-check-circle"></i>
                  Approve
                </vs-button>
                <template #tooltip> Approve transaction </template>
              </vs-tooltip>
              <vs-tooltip dark>
                <vs-button
                  icon
                  dark
                  transparent
                  @click="openConfirmTransactionDialog(transaction)"
                >
                  <i style="font-size: 1.3rem" class="las la-check-double"></i>
                  Confirm
                </vs-button>
                <template #tooltip> Confirm transaction </template>
              </vs-tooltip>
              <vs-tooltip left dark>
                <vs-button icon danger flat>
                  <i style="font-size: 1.3rem" class="lar la-trash-alt"></i>
                </vs-button>
                <template #tooltip> Delete transaction </template>
              </vs-tooltip>
            </div>
          </div>
        </template>
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
    page: 1,
    pageCount: 0,
    itemsPerPage: 8,
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
    ]),
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["transactions"]),
  },
}
</script>
