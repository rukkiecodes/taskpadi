<template>
  <vs-table class="white">
    <template #thead>
      <vs-tr class="white">
        <vs-th class="white"> ID </vs-th>
        <vs-th class="white"> Product name </vs-th>
        <vs-th class="white"> Final price </vs-th>
        <vs-th class="white"> Initial price </vs-th>
        <vs-th class="white"> Charge </vs-th>
        <vs-th class="white"> Quantity </vs-th>
        <vs-th class="white"> Status </vs-th>
        <vs-th class="white"> View </vs-th>
      </vs-tr>
    </template>
    <template #tbody>
      <vs-tr
        :key="i"
        :data="product"
        v-for="(product, i) in $vs.getPage(products, page, max)"
      >
        <vs-td>
          {{ product.slug }}
        </vs-td>
        <vs-td>
          {{ product.name }}
        </vs-td>
        <vs-td> ₦{{ product.finalPrice }} </vs-td>
        <vs-td> ₦{{ product.initialPrice }} </vs-td>
        <vs-td> ₦{{ product.transactionCharge }} </vs-td>
        <vs-td>
          {{ product.quantity }}
        </vs-td>
        <vs-td>
          <v-chip
            small
            label
            class="text-capitalize rounded-lg"
            :class="{
              'orange lighten-5 orange--text text--accent-3':
                product.status == 'inactive',
              'green lighten-5 green--text text--darken-1':
                product.status == 'completed',
              'deep-purple lighten-5 deep-purple--text text--darken-1':
                product.status == 'ongoing',
            }"
          >
            {{ product.status }}
          </v-chip>
        </vs-td>
        <vs-td>
          <div class="d-flex">
            <vs-button
              icon
              transparent
              color="#2A00A2"
              @click="viewProductDetails(product)"
            >
              <i class="lar la-eye"></i>
            </vs-button>
          </div>
        </vs-td>
      </vs-tr>
    </template>

    <template #footer>
      <vs-pagination
        v-model="page"
        color="#6200EA"
        :length="$vs.getLength(products, max)"
      />
    </template>
  </vs-table>
</template>

<script>
// @ts-nocheck
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    page: 1,
    max: 7,
  }),

  mounted() {
    this.$nextTick(() => {
      const tb = document.querySelectorAll(".vs-table__td")

      if (tb) {
        for (let i = 0; i <= tb.length - 1; i++) {
          setTimeout(() => {
            tb[i].style.padding = "0 8px"
          }, 100)
        }
      }

      const footer = document.querySelector(".vs-table__footer")

      if (footer) {
        footer.style.background = "none"
      }
    })
  },

  methods: {
    ...mapActions(["viewProductDetails"]),
  },

  computed: {
    ...mapState(["product"]),
    ...mapGetters(["products"]),
  },
}
</script>
