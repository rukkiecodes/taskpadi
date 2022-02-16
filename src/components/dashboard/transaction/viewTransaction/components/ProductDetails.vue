<template>
  <v-col cols="12" sm="6" lg="8">
    <v-card flat color="transparent">
      <v-list color="transparent">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold text-capitalize"
              >{{
                transaction.selectedTransaction.recipientName
              }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card flat color="transparent">
      <v-card-title>
        <span class="text-h6 font-weight-medium">Description:</span>
        <v-spacer />
        <span class="text-h4 font-weight-bold"
          >${{ transaction.selectedTransaction.price }}</span
        >
      </v-card-title>

      <v-card-text class="text-center text-sm-left">{{
        transaction.selectedTransaction.description
      }}</v-card-text>
      <v-card
        class="d-flex justify-space-between align-center"
        flat
        :color="detailsCard"
        :dark="detailsCardMode"
      >
        <v-card-title
          class="text-body-1 font-weight-medium"
          :class="detailsCardTextClass"
          >Transaction Details</v-card-title
        >
        <v-chip
          small
          label
          class="text-capitalize rounded-lg font-weight-bold"
          :class="{
            'orange lighten-5 orange--text text--accent-3':
              transaction.selectedTransaction.status == 'pending',
            'teal lighten-5 teal--text text--darken-1':
              transaction.selectedTransaction.status == 'completed',
            'deep-purple lighten-5 deep-purple--text text--darken-1':
              transaction.selectedTransaction.status == 'ongoing',
          }"
        >
          {{ transaction.selectedTransaction.status }}
        </v-chip>
      </v-card>
      <v-divider />
      <v-card flat class="text-center d-flex flex-column" color="transparent">
        <v-card-text class="text-center text-sm-left">
          <v-row
            no-gutters
            justify="space-between"
            align="center"
            class="flex-column-reverse flex-sm-row"
          >
            <v-col cols="12" sm="6">
              <p class="grey--text text--darken-4 mt-n2">
                <v-icon small color="amber">mdi-star-circle</v-icon> Transaction
                code :
                <span class="font-weight-bold">{{
                  transaction.selectedTransaction.code
                }}</span>
              </p>
              <p class="grey--text text--darken-4 mt-2">
                <v-icon small color="amber">mdi-star-circle</v-icon> Location :
                <span class="font-weight-bold">{{
                  transaction.selectedTransaction.price
                }}</span>
              </p>
              <p class="grey--text text--darken-4 mt-n2">
                <v-icon small color="amber">mdi-star-circle</v-icon> Charge :
                <span class="font-weight-bold">{{
                  transaction.selectedTransaction.charge
                }}</span>
              </p>
              <p class="grey--text text--darken-4 mt-n2">
                <v-icon small color="amber">mdi-star-circle</v-icon> Duration :
                <span class="font-weight-bold">{{
                  transaction.selectedTransaction.duration
                }}</span>
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card-text
        class="text-center text-sm-left d-flex flex-column flex-sm-row"
      >
        <vs-button
          color="danger"
          class="text-capitalize mr-3"
          @click="openDeleteTransactionDialog(transaction.selectedTransaction)"
          >Delete</vs-button
        >
        <vs-button
          flat
          color="#6200EA"
          class="text-capitalize mr-3"
          @click="openPopTransactionDialog(transaction.selectedTransaction)"
          >POP</vs-button
        >
        <vs-button
          flat
          color="#6200EA"
          class="text-capitalize mr-3"
          @click="openDeclineTransactionDialog(transaction.selectedTransaction)"
          >Decline</vs-button
        >
        <vs-button
          flat
          color="#6200EA"
          class="text-capitalize mr-3"
          @click="openConfirmTransactionDialog(transaction.selectedTransaction)"
          >Confirm</vs-button
        >
        <vs-button
          flat
          color="#6200EA"
          class="text-capitalize mr-3"
          @click="
            openApprovalTransactionDialog(transaction.selectedTransaction)
          "
          >Approve</vs-button
        >
        <vs-button
          flat
          color="#6200EA"
          class="text-capitalize mr-3"
          @click="openUpdateTransactionDialog(transaction.selectedTransaction)"
          >Edit</vs-button
        >
      </v-card-text>
    </v-card>
    <ConfirmDelete />
    <ConfirmPop />
    <ConfirmApprove />
    <ConfirmConfirm />
    <ConfirmDecline />
    <UpdateTransaction />
  </v-col>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  data: () => ({
    rating: 3.5,
    value: 60,
  }),

  components: {
    ConfirmDelete: () => import("../../ConfirmDelete.vue"),
    ConfirmPop: () => import("../../ConfirmPop.vue"),
    ConfirmApprove: () => import("../../ConfirmApprove.vue"),
    ConfirmConfirm: () => import("../../ConfirmConfirm.vue"),
    ConfirmDecline: () => import("../../ConfirmDecline.vue"),
    UpdateTransaction: () => import("../../UpdateTransaction.vue"),
  },

  methods: {
    ...mapActions([
      "openDeleteTransactionDialog",
      "openPopTransactionDialog",
      "openDeclineTransactionDialog",
      "openConfirmTransactionDialog",
      "openApprovalTransactionDialog",
      "openUpdateTransactionDialog",
    ]),
  },

  computed: {
    ...mapState(["transaction"]),

    detailsCard() {
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
    detailsCardMode() {
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
    detailsCardTextClass() {
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

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
