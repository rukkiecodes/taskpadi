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
          <v-btn
            dark
            small
            depressed
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
          </v-btn>
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

        <template #expand>
          <div
            style="
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div
              style="
                display: flex;
                justify-content: flex-start;
                align-items: center;
              "
            >
              <vs-avatar color="#F9FCFD" v-if="product.image != null">
                <img :src="product.image" alt="" />
              </vs-avatar>
              <vs-avatar color="#6200EA" v-else>
                <template #text>
                  {{ product.name.toUpperCase() }}
                </template>
              </vs-avatar>
              <p style="margin-top: 23px; margin-left: 5px">
                {{ product.name }}
              </p>
            </div>
            <div
              style="
                display: flex;
                justify-content: flex-start;
                align-items: center;
              "
            >
              <vs-button
                flat
                color="#6200EA"
                @click="openEditProductDialog(product)"
              >
                <i style="font-size: 1.3rem" class="lar la-edit"></i>
                Edit
              </vs-button>
            </div>

            <div
              style="
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
              "
            >
              <p
                class="mt-10 mb-5 py-0 text-body-5 grey--text text--darken-3 font-weight-bold"
              >
                Seller details
              </p>
              <vs-table>
                <template #thead>
                  <vs-tr>
                    <vs-th></vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th>Phone</vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>country</vs-th>
                  </vs-tr>
                </template>
                <template #tbody>
                  <vs-tr :data="product">
                    <vs-td>
                      <vs-avatar>
                        <img :src="product.seller.image" alt="" />
                      </vs-avatar>
                    </vs-td>
                    <vs-td>
                      {{ product.seller.fullName }}
                    </vs-td>
                    <vs-td>
                      {{ product.seller.phone }}
                    </vs-td>
                    <vs-td>
                      {{ product.seller.email }}
                    </vs-td>
                    <vs-td>
                      {{ product.seller.country }}
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
        </template>
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
    pageCount: 0,
    itemsPerPage: 8,
    fab: true,
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
    ...mapActions(["viewProductDetails", "openEditProductDialog"]),
  },

  computed: {
    ...mapState(["product"]),
    ...mapGetters(["products"]),
  },
}
</script>
