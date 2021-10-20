<template>
  <v-card width="100%" color="transparent" class="mt-7" flat>
    <v-card-title>
      Transaction Summary
      <v-spacer></v-spacer>
      <v-text-field
        solo
        flat
        dense
        single-line
        hide-details
        label="Search"
        v-model="search"
        placeholder="Search"
        append-icon="mdi-magnify"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="transparent"
      hide-default-footer
    >
      <template v-slot:item.status="{ item }">
        <v-chip
          color="transparent"
          :class="{
            'orange--text': item.status == 'Pending',
            'teal--text': item.status == 'Successful',
          }"
          class="px-0"
        >
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn icon>
          <v-icon small>{{ item.action }}</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "Transaction ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Amount", value: "amount" },
      { text: "Date & Time", value: "dateTime" },
      { text: "Status", value: "status" },
      { text: "Action", value: "action", sortable: false },
    ],
    desserts: [
      {
        id: "12625juf",
        amount: "#45,000",
        dateTime: "2021-10-24",
        status: "Pending",
        action: "mdi-eye-outline",
      },
      {
        id: "12691juf",
        amount: "#25,900",
        dateTime: "2021-10-21",
        status: "Successful",
        action: "mdi-eye-outline",
      },
      {
        id: "12645juf",
        amount: "#45,000",
        dateTime: "2021-10-24",
        status: "Pending",
        action: "mdi-eye-outline",
      },
      {
        id: "15695juf",
        amount: "#25,000",
        dateTime: "2021-10-21",
        status: "Successful",
        action: "mdi-eye-outline",
      },
    ],
  }),
}
</script>
