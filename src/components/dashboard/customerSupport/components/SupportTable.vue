<template>
  <div>
    <vs-button
      @click="customerSupport.customerDialog = true"
      class="px-4 mb-5"
      size="large"
      color="#6200EA"
      >Submit ticket</vs-button
    >
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <vs-button
          transparent
          color="#616182"
          class="text-body-2 font-weight-bold text-capitalize mt-2"
          v-bind="attrs"
          v-on="on"
        >
          <i style="font-size: 1.1rem" class="las la-filter"></i>
          Filter
        </vs-button>
      </template>
      <v-list dense class="py-0">
        <v-list-item
          dense
          v-for="(item, index) in ticketFilters"
          :key="index"
          @click="sortSupport(item)"
        >
          <v-list-item-title
            class="text-body-2 grey--text text--darken-2 font-weight-light"
            >{{ item.title }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>

    <vs-table class="white">
      <template #thead>
        <vs-tr style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">
          <vs-th class="white" v-for="(head, i) in headers" :key="i">
            {{ head.text }}
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          :data="ticket"
          v-for="(ticket, i) in $vs.getPage(
            $vs.getSearch(tickets, customerSupport.search),
            page,
            max
          )"
        >
          <!-- v-for="(ticket, i) in $vs.getSearch(tickets, customerSupport.search)" -->
          <vs-td>
            {{ ticket.unique_code }}
          </vs-td>
          <vs-td class="table_subject">
            {{ ticket.subject }}
          </vs-td>
          <vs-td>
            {{
              new Date(ticket.created_at)
                .toLocaleDateString()
                .replace("/", "-")
                .replace("/", "-")
            }}
          </vs-td>
          <vs-td>
            <v-btn
              dark
              small
              depressed
              class="text-capitalize rounded-lg"
              :class="{
                'orange lighten-5 orange--text text--accent-3':
                  ticket.status == 'pending',
                'teal lighten-5 teal--text text--darken-1':
                  ticket.status == 'Resolved',
              }"
            >
              {{ ticket.status }}
            </v-btn>
          </vs-td>
          <vs-td>
            <vs-button
              @click="viewTicket(ticket)"
              icon
              transparent
              color="#292D32"
            >
              <i class="las la-eye"></i>
            </vs-button>
          </vs-td>
        </vs-tr>
      </template>
      <template #footer>
        <vs-pagination
          v-model="page"
          color="#6200EA"
          :length="$vs.getLength($vs.getSearch(tickets, customerSupport.search), max)"
        />
      </template>
    </vs-table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    page: 1,
    max: 7,
    headers: [
      {
        text: "ID",
        value: "unique_code",
      },
      { text: "Ticket subject", value: "subject" },
      { text: "Date", value: "created_at" },
      { text: "Status", value: "status" },
      { text: "Response", value: "action" },
    ],
  }),

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
    ...mapActions(["viewTicket"]),

    sortSupport(item) {
      if (item.title == "All") {
        this.customerSupport.search = ""
      } else {
        this.customerSupport.search = item.title
      }
    },
  },

  computed: {
    ...mapState(["customerSupport"]),
    ...mapGetters(["ticketFilters", "tickets"]),
  },
}
</script>
