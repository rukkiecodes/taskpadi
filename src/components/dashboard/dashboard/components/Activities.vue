<template>
  <v-col class="pa-0 pl-sm-3 mt-3 mt-sm-0" cols="12" sm="6">
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
  }),
}
</script>
