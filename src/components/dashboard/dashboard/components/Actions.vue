<template>
  <v-col class="px-0" cols="12" sm="4">
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <v-card class="rounded-xl" flat>
          <v-card-text class="pa-6">
            <vs-button
              block
              icon
              square
              color="#6200EA"
              class="text-capitalize font-weight-bold rounded-lg"
            >
              Create Escrow
              <i class="las la-arrow-up"></i>
            </vs-button>
            <vs-button
              icon
              block
              square
              border
              color="#6200EA"
              to="/dashboard/withdraws"
              class="text-capitalize font-weight-bold rounded-lg"
            >
              Withdraw
              <i class="las la-arrow-down"></i>
            </vs-button>

            <v-card-title>
              <span class="text-body-1">Recent orders</span>
              <v-spacer />
              <v-btn icon small>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-card-title>

            <v-list dense>
              <v-list-item v-for="(oreder, i) in orders" :key="i" dense>
                <v-list-item-avatar>
                  <v-img :src="oreder.image" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ oreder.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ oreder.name }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action-text class="green--text font-weight-bold">
                  {{ oreder.amount }}
                </v-list-item-action-text>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
// @ts-nocheck
export default {
  data: () => ({
    cards: [
      {
        subtitle: "Orders",
        amount: "1,235",
        icon: "mdi-file-document-outline",
      },
      {
        subtitle: "Revenue",
        amount: "$35, 723",
        icon: "mdi-package-down",
      },
    ],

    orders: [
      {
        name: "Jummy Drake",
        time: "9 minutes ago",
        amount: "₦2,349",
        image: require("../../../../assets/trust/Photo.png"),
      },
      {
        name: "Driks Denson",
        time: "15 minutes ago",
        amount: "₦1,500",
        image: require("../../../../assets/trust/Photo2.png"),
      },
      {
        name: "Peter Crouch",
        time: "24 minutes ago",
        amount: "₦1,022",
        image: require("../../../../assets/trust/Photo3.png"),
      },
      {
        name: "Manual williams",
        time: "35 minutes ago",
        amount: "₦1,220",
        image: require("../../../../assets/trust/Photo4.png"),
      },
    ],
  }),
}
</script>
