<template>
  <v-row class="mt-6" justify="start">
    <v-col cols="12">
      <v-btn
        dark
        large
        depressed
        class="text-capitalize"
        @click.stop="dialog = true"
        color="deep-purple accent-4"
      >
        Create transaction
      </v-btn>
    </v-col>

    <v-dialog
      v-model="dialog"
      :fullscreen="fullscreen"
      :max-width="dislogWidth"
    >
      <v-card>
        <v-card-title class="text-h5">
          Create transaction
        </v-card-title>

        <v-card-text>
          <v-row justify="space-between" align="start">
            <v-col cols="12" sm="6">
              <v-text-field
                hide-details
                color="deep-purple accent-4"
                label="Sirial number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                hide-details
                color="deep-purple accent-4"
                label="Product Name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                hide-details
                color="deep-purple accent-4"
                label="Product Type"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                hide-details
                color="deep-purple accent-4"
                label="Quantity"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                hide-details
                color="deep-purple accent-4"
                label="Amount"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-menu
                ref="startDateMenu"
                v-model="startDateMenu"
                :close-on-content-click="false"
                :return-value.sync="startDate"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="startDate"
                    label="Start date"
                    color="deep-purple accent-4"
                    hide-details
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  color="deep-purple accent-4"
                  v-model="startDate"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="grey darken-1"
                    @click="startDateMenu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="deep-purple accent-4"
                    @click="$refs.startDateMenu.save(startDate)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="6">
              <v-menu
                ref="endDateMenu"
                v-model="endDateMenu"
                :close-on-content-click="false"
                :return-value.sync="endDate"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="endDate"
                    label="End date"
                    hide-details
                    color="deep-purple accent-4"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  color="deep-purple accent-4"
                  v-model="endDate"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="grey darken-1"
                    @click="endDateMenu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="deep-purple accent-4"
                    @click="$refs.endDateMenu.save(endDate)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                hide-details
                color="deep-purple accent-4"
                label="Product status"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="grey darken-3"
            class="text-capitalize"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>

          <v-btn
            color="deep-purple accent-4"
            class="text-capitalize"
            depressed
            dark
            @click="dialog = false"
          >
            Create transaction
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    startDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    endDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    startDateMenu: false,
    endDateMenu: false,
  }),
  computed: {
    fullscreen() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return false;
        case "md":
          return false;
        case "lg":
          return false;
        case "xl":
          return false;
      }
    },
    dislogWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 500;
        case "xl":
          return 600;
      }
    },
  },
};
</script>
