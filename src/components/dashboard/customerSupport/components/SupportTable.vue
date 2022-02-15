<template>
  <div>
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
        <vs-tr
          class="white"
          style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)"
        >
          <vs-th class="white"> Id </vs-th>
          <vs-th class="white"> Subject </vs-th>
          <vs-th class="white"> Date </vs-th>
          <vs-th class="white"> Response </vs-th>
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
          <vs-td>
            {{ ticket.unique_code }}
          </vs-td>
          <vs-td class="table_subject">
            {{ ticket.subject }}
          </vs-td>
          <vs-td>
            {{ new Date(ticket.created_at).toLocaleDateString() }}
          </vs-td>
          <vs-td>
            <vs-button
              icon
              transparent
              color="#292D32"
              @click="viewTicket(ticket)"
            >
              <i class="las la-book-reader"></i>
            </vs-button>
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
                <vs-avatar v-if="ticket.file != null">
                  <img
                    :src="`https://dev.trustpaddi.com/public/storage/images/transactions/${ticket.file}`"
                    alt=""
                  />
                </vs-avatar>
                <vs-avatar color="#6200EA" v-else>
                  <template #text>
                    {{ ticket.subject.toUpperCase() }}
                  </template>
                </vs-avatar>
                <p style="margin-top: 23px; margin-left: 5px">
                  {{ ticket.subject }}
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
                    color="#6200EA"
                    @click="viewSingleTicket(ticket)"
                  >
                    <i class="lar la-eye"></i>
                  </vs-button>
                  <template #tooltip> View Ticket </template>
                </vs-tooltip>
                <vs-tooltip dark>
                  <vs-button @click="closeSingleTicket(ticket)" icon warn>
                    <i class="las la-times"></i>
                  </vs-button>
                  <template #tooltip> Close Ticket </template>
                </vs-tooltip>
                <vs-tooltip left dark>
                  <vs-button @click="deleteSingleTicket(ticket)" icon danger>
                    <i class="lar la-trash-alt"></i>
                  </vs-button>
                  <template #tooltip> Delete Ticket </template>
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
            $vs.getLength($vs.getSearch(tickets, customerSupport.search), max)
          "
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
      { text: "Subject", value: "subject" },
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
    ...mapActions([
      "viewTicket",
      "viewSingleTicket",
      "deleteSingleTicket",
      "closeSingleTicket",
    ]),

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
