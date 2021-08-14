<template>
  <v-data-table
    :headers="headers"
    :items="transactions"
    item-key="product_name"
    :search="search"
    :items-per-page="5"
  >
    <template v-slot:top>
      <v-text-field
        v-model="search"
        label="Search"
        class="mx-4"
        :search="search"
        clearable
      ></v-text-field>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      product_name: "",
      transactions: [
        {
          SN: "01",
          product_name: "Bag",
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          SN: "02",
          product_name: "Shoe",
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          SN: "03",
          product_name: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          SN: "04",
          product_name: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          SN: "05",
          product_name: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          SN: "06",
          product_name: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          SN: "07",
          product_name: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          SN: "08",
          product_name: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          SN: "09",
          product_name: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          SN: "10",
          product_name: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "S/N",
          align: "start",
          sortable: false,
          value: "SN",
        },
        { text: "Product Name", value: "product_name" },
        { text: "Product Type", value: "fat" },
        { text: "Quantity", value: "carbs" },
        { text: "Amount", value: "protein" },
        { text: "Date", value: "iron" },
        { text: "Status", value: "iron" },
      ];
    },
  },
};
</script>
