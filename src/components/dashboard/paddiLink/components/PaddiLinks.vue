<template>
  <div>
    <v-btn
      dark
      large
      depressed
      color="deep-purple accent-4"
      @click="paddiLink.dialog = true"
      class="text-body-2 font-weight-bold text-capitalize"
      >Create new link</v-btn
    >
    <v-data-table
      :headers="headers"
      :items="paddiLinks"
      :items-per-page="5"
      hide-default-footer
      class="elevation-0 mt-5"
    >
      <template v-slot:item.image="{ item }">
        <vs-avatar>
          <img :src="item.image" :alt="item.title + 'image'" alt="" />
        </vs-avatar>
      </template>
      <template v-slot:item.id="{ item }">
        <span class="grey--text text--darken-1 text-body-2">{{ item.id }}</span>
      </template>
      <template v-slot:item.title="{ item }">
        <span class="grey--text text--darken-1 text-body-2">{{
          item.title
        }}</span>
      </template>
      <template v-slot:item.action="{ item }">
        <div class="d-flex">
          <vs-button icon transparent color="#1CC8EE">
            <i style="font-size: 1.5rem" class="las la-copy"></i>
          </vs-button>
          <vs-button @click="editPaddiLink(item)" icon transparent color="#6E7191">
            <i style="font-size: 1.5rem" class="las la-edit"></i>
          </vs-button>
        </div>
      </template>
      <template v-slot:item.price="{ item }">
        <span class="grey--text text--darken-1 text-body-2"
          >₦{{ item.price }}</span
        >
      </template>
      <template v-slot:item.dateCreated="{ item }">
        <span class="grey--text text--darken-1 text-body-2">{{
          item.dateCreated
        }}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"
export default {
  data: () => ({
    headers: [
      {
        text: "",
        align: "start",
        sortable: false,
        value: "image",
      },
      { text: "ID", value: "id" },
      { text: "Product name", value: "title" },
      { text: "Amount", value: "price" },
      { text: "Date created", value: "dateCreated" },
      { text: "Action", value: "action" },
    ],

    desserts: [
      {
        avatar: "Frozen Yogurt",
        id: "12695juf",
        title: "Product name",
        amount: "25,900",
        dateCreated: "2021-10-21",
        action: "",
      },
    ],
  }),

  mounted() {
    const border = document.querySelectorAll(
      ".theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th"
    )

    if (border)
      for (let i = 0; i <= border.length; i++) {
        border[i].style.borderColor = "transparent"
      }
  },

  methods: {
    ...mapActions(["editPaddiLink"]),

    editItem(item) {
      console.log(item)
    }
  },

  computed: {
    ...mapGetters(["paddiLinks"]),
    ...mapState(["paddiLink"]),
  },
}
</script>
