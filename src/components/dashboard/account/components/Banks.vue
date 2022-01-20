<template>
  <v-card width="100%" outlined class="rounded-lg banks">
    <v-card-text class="font-weight-bold">Banks</v-card-text>

    <v-card-text>
      <v-row justify="space-between" align="start">
        <v-col cols="12">
          <v-list dense>
            <v-list-item dense v-for="(bank, i) in displayedBanks" :key="i">
              <v-list-item-avatar>
                <v-icon>mdi-bank</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="bank.name" />
                <v-list-item-subtitle v-text="bank.abbreviation" />
              </v-list-item-content>

              <v-list-item-action-text v-text="bank.code" />
            </v-list-item>
          </v-list>
          <div>
            <vs-pagination
              not-margin
              color="#6200EA"
              v-model="page"
              :length="pages.length"
            />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"

export default {
  data: () => ({
    page: 1,
    perPage: 5,
    pages: [],
    value: "",
  }),

  watch: {
    banks() {
      this.setPages()
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.getBanks()
    })
  },
  methods: {
    ...mapActions(["getBanks"]),

    setPages() {
      let number_of_pages = Math.ceil(
        this.$store.getters.banks.length / this.perPage
      )
      for (let index = 1; index <= number_of_pages; index++) {
        this.pages.push(index)
      }
    },

    paginate(banks) {
      let page = this.page
      let perPage = this.perPage
      let from = page * perPage - perPage
      let to = page * perPage
      return banks.slice(from, to)
    },
  },

  computed: {
    ...mapState(["settings"]),
    ...mapGetters(["banks"]),

    displayedBanks() {
      return this.paginate(this.$store.getters.banks)
    },
  },
}
</script>
