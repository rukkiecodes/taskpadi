<template>
  <v-container>
    <vs-table class="white">
      <template #thead>
        <vs-tr class="white">
          <vs-th class="white"> Id </vs-th>
          <vs-th class="white"> Name </vs-th>
          <vs-th class="white"> Location </vs-th>
          <vs-th class="white"> Location </vs-th>
          <vs-th class="white"> Amount </vs-th>
          <vs-th class="white"> Date </vs-th>
          <vs-th class="white"> Status </vs-th>
          <vs-th class="white"> Action </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>
          <vs-td>
            {{ tr.id }}
          </vs-td>
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>
          <vs-td>
            {{ tr.id }}
          </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>
          <vs-td>
            {{ tr.id }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </v-container>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data: () => ({
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        website: "elvis.io",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
      },
    ],
  }),

  mounted() {
    this.$nextTick(() => {
      this.getOrders()
    })
  },
  methods: {
    ...mapActions(["getOrders"]),
  },
}
</script>
