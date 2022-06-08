<template>
  <v-row :class="rowClass" justify="start" align="start">
    <v-col cols="12" sm="6" lg="4">
      <v-card flat height="300" color="#F8F8FB" max-height="400" v-for="(ticket, i) in singleTicket" :key="i">
        <img style="width: 100%;" :src="ticket.file" />
      </v-card>
    </v-col>

    <v-col v-for="(ticket, i) in singleTicket" :key="i" cols="12" sm="6" lg="8">
      <v-card flat color="transparent">
        <v-card flat :color="detailsCard" :dark="detailsCardMode">
          <v-card-title class="text-body-1 font-weight-medium" :class="detailsCardTextClass">Ticket Details
          </v-card-title>
        </v-card>

        <v-divider />

        <v-card flat class="text-center d-flex flex-column" color="transparent">
          <v-card-title class="text-subtitle-1 font-weight-medium">
            <span class="text-h6">{{ ticket.subject }}</span>

            <v-spacer />

            <v-chip small label class="text-capitalize rounded-lg font-weight-bold" :class="{
              'orange lighten-5 orange--text text--accent-3':
                ticket.status == 'pending',
              'teal lighten-5 teal--text text--darken-1':
                ticket.status == 'closed',
            }">
              {{ ticket.status }}
            </v-chip>
          </v-card-title>

          <v-card-text class="text-center text-sm-left">
            <v-row no-gutters align="center" justify="space-between" class="flex-column-reverse flex-sm-row">
              <v-col cols="12" sm="6">
                <p class="grey--text text--darken-4 mt-n2">
                  <v-icon small color="amber">mdi-star-circle</v-icon>
                  <span class="font-weight-bold">Department: </span>
                  <span>{{ ticket.department }}</span>
                </p>

                <p class="grey--text text--darken-4 mt-2">
                  <v-icon small color="amber">mdi-star-circle</v-icon>
                  <span class="font-weight-bold">Description: </span>
                  <span>{{ ticket.description }}</span>
                </p>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <vs-button danger @click="customerSupport.confirmDeleteDialog = true">
              Delete ticket
            </vs-button>
            <vs-button flat color="#6200EA" @click="customerSupport.closeTicketDialog = true">
              Close ticket
            </vs-button>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-col>
    <CloseTicket />
    <ConfirmDelete />
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  components: {
    CloseTicket: () => import("./CloseTicket.vue"),
    ConfirmDelete: () => import("./ConfirmDelete.vue"),
  },

  mounted () {
    this.$nextTick(() => {
      this.viewSingleTicket()
    })
  },

  methods: {
    ...mapActions(["viewSingleTicket"]),
  },

  computed: {
    ...mapState(["customerSupport"]),
    ...mapGetters(["singleTicket"]),

    rowClass () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "mb-16"
        case "sm":
          return "mb-0"
        case "md":
          return "mb-16"
        case "lg":
          return "mb-16"
        case "xl":
          return "mb-16"
      }
    },

    detailsCard () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "deep-purple accent-4"
        case "sm":
          return "transparent"
        case "md":
          return "transparent"
        case "lg":
          return "transparent"
        case "xl":
          return "transparent"
      }
    },

    detailsCardMode () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
          return false
        case "md":
          return false
        case "lg":
          return false
        case "xl":
          return false
      }
    },

    detailsCardTextClass () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "d-flex justify-center"
        case "sm":
          return "d-flex justify-start"
        case "md":
          return "d-flex justify-start"
        case "lg":
          return "d-flex justify-start"
        case "xl":
          return "d-flex justify-start"
      }
    },
  },
}
</script>
