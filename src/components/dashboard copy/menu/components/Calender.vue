<template>
  <v-col class="order-first order-sm-last" cols="12" sm="6" md="4" xl="3">
    <v-date-picker
      v-model="date1"
      :events="arrayEvents"
      full-width
      no-title
      color="deep-purple accent-4"
      event-color="green lighten-1"
    ></v-date-picker>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    arrayEvents: null,
    date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),

  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },
};
</script>
