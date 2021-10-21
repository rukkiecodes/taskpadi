<template>
  <v-row justify="space-between" align="start">
    <v-col cols="12" sm="6">
      <v-card class="pa-0 pb-3" flat>
        <v-card-title
          class="grey--text text--darken-3 text-subtitle-2 font-weight-bold"
        >
          Activity
        </v-card-title>
        <v-card-text class="py-0">
          <v-timeline align-top dense>
            <v-timeline-item
              small
              fill-dot
              icon-color="white"
              icon="mdi-arrow-right"
              color="deep-purple accent-4"
              v-for="(time, i) in timeline"
              :key="i"
            >
              <v-row justify="space-between" no-gutters>
                <v-col cols="4">
                  <span class="text-body-2 font-weight-bold"
                    >{{ time.date }}
                    <v-icon color="deep-purple accent-4" right small
                      >mdi-arrow-right</v-icon
                    ></span
                  >
                </v-col>
                <v-col cols="8">
                  <div class="text-caption grey--text text--darken-3">
                    {{ time.text }}
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col class="flex-column justify-space-between" cols="12" sm="6">
      <v-card v-for="(card, i) in cards" :key="i" flat class="pa-0 ma-0 mb-4">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle
                class="text-body-2"
                v-text="card.subtitle"
              />
              <v-list-item-title
                class="text-h6 grey--text text--darken-3"
                v-text="card.amount"
              />
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-avatar color="deep-purple accent-4" size="50">
                <v-icon dark v-text="card.icon" />
              </v-list-item-avatar>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    timeline: [
      {
        date: "22 Nov",
        text: "Responded to need “Volunteer Activities",
      },
      {
        date: "17 Nov",
        text: "Everyone realizes why a new common language would be desirable.",
      },
      {
        date: "15 Nov",
        text: "Joined the group “Boardsmanship Forum”",
      },
      {
        date: "12 Nov",
        text: "Responded to need “In-Kind Opportunity”",
      },
    ],

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
      {
        subtitle: "Average Price",
        amount: "$16.2",
        icon: "mdi-tag",
      },
    ],
  }),
}
</script>
