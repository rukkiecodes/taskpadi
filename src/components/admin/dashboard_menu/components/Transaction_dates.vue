<template>
  <v-date-picker
    no-title
    width="100%"
    :events="arrayEvents"
    :reactive="true"
    color="indigo lighten-2"
    class="rounded-xl"
    event-color="indigo accent-4"
    v-model="picker"
  ></v-date-picker>
</template>

<script>
export default {
  data: () => ({
    arrayEvents: null,
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
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

  methods: {},
};
</script>
