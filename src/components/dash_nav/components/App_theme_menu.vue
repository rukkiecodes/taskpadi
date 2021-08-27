<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        height="34"
        class="rounded-lg indigo--text px-0"
        v-bind="attrs"
        v-on="on"
        depressed
        x-small
      >
        <v-icon>mdi-tshirt-crew-outline</v-icon>
      </v-btn>
    </template>

    <v-card width="400" class="rounded-lg pa-2">
      <v-card-text class="ma-0 pa-0">
        <v-btn @click="dark_mode" height="44" width="190" color="blue-grey darken-4 rounded-l-lg">
          <span class="white--text text-capitalize font-weight-bold">Dark</span>
          <v-icon class="white--text ml-2">mdi-weather-night</v-icon>
        </v-btn>
        <v-btn @click="light_mode" height="44" width="190" color="white rounded-r-lg">
          <span
            class="indigo--text text--accent-4 text-capitalize font-weight-bold"
            >Light</span
          >
          <v-icon class="indigo--text text--accent-4 ml-2"
            >mdi-weather-sunny</v-icon
          >
        </v-btn>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    menu: false,
    app_mode: localStorage.getItem("trustpaddi_app_theme")
  }),
  methods: {
    light_mode() {
      if (this.$vuetify.theme.dark == true) {
        this.$vuetify.theme.dark = false
      }
    },
    dark_mode() {
      if (this.$vuetify.theme.dark != true) {
        this.$vuetify.theme.dark = true
      }
    }
  }
};
</script>
