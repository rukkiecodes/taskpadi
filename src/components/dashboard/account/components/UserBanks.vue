<template>
  <v-card width="100%" outlined class="rounded-lg banks">
    <v-card-text class="font-weight-bold">Your Banks</v-card-text>

    <v-card-text>
      <v-row justify="space-between" align="start">
        <v-col cols="12">
          <v-list dense>
            <v-list-item dense v-for="(bank, i) in displayedBanks" :key="i">
              <v-list-item-avatar>
                <v-icon>mdi-bank</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="bank.accountName" />
                <v-list-item-subtitle
                  v-text="bank.bankName + ' ' + bank.accountNumber"
                />
              </v-list-item-content>

              <v-list-item-action-text
                :class="{
                  'green--text font-weight-bold text-capitalize':
                    bank.status == 'active',
                }"
                v-text="bank.status"
              />
            </v-list-item>
          </v-list>
          <div class="text-center mt-n8" v-show="pages.length < 1">
            <span>No registered banks</span>
          </div>
          <div v-show="pages.length >= 5">
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
    userBanks() {
      this.setPages()
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.getUserBanks()
    })
  },
  methods: {
    ...mapActions(["getUserBanks"]),

    setPages() {
      let number_of_pages = Math.ceil(
        this.$store.getters.userBanks.length / this.perPage
      )
      for (let index = 1; index <= number_of_pages; index++) {
        this.pages.push(index)
      }
    },

    paginate(userBanks) {
      let page = this.page
      let perPage = this.perPage
      let from = page * perPage - perPage
      let to = page * perPage
      return userBanks.slice(from, to)
    },
  },

  computed: {
    ...mapState(["settings"]),
    ...mapGetters(["userBanks"]),

    displayedBanks() {
      return this.paginate(this.$store.getters.userBanks)
    },
  },
}
</script>
