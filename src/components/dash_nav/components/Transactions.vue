<template>
  <v-list-group
    no-action
    prepend-icon="mdi-bank-outline"
    :class="{
      'blue darken-3':
        dash_nav.active_dash_route == '/admin/goods_products' ||
        dash_nav.active_dash_route == '/admin/crypto' ||
        dash_nav.active_dash_route == '/admin/services',
    }"
    class="mt-3 mb-3 rounded-lg"
    color="white"
  >
    <template v-slot:activator>
      <v-list-item-title class="white--text">Transactions</v-list-item-title>
    </template>
    <!-- GOODS / PRODUCTS -->
    <v-list-item
      :class="{
        'white rounded-lg':
          dash_nav.active_dash_route == '/admin/goods_products',
      }"
      class="mt-2 mx-3"
      @click="goto_goods_products"
      link
    >
      <v-list-item-title
        class="white--text ml-n3"
        :class="{
          'indigo--text text--accent-4 font-weight-bold':
            dash_nav.active_dash_route == '/admin/goods_products',
        }"
        >Goods/products</v-list-item-title
      >
    </v-list-item>
    <!-- CRYPTO -->
    <v-list-item
      @click="goto_crypto"
      class="mt-2 mx-3"
      :class="{
        'white rounded-lg': dash_nav.active_dash_route == '/admin/crypto',
      }"
      link
    >
      <v-list-item-title
        class="white--text ml-n3"
        :class="{
          'indigo--text text--accent-4 font-weight-bold':
            dash_nav.active_dash_route == '/admin/crypto',
        }"
        >Crypto</v-list-item-title
      >
    </v-list-item>
    <!-- services -->
    <v-list-item
      @click="goto_services"
      class="mt-2 mx-3"
      :class="{
        'white rounded-lg': dash_nav.active_dash_route == '/admin/services',
      }"
      link
    >
      <v-list-item-title
        class="white--text ml-n3"
        :class="{
          'indigo--text text--accent-4 font-weight-bold':
            dash_nav.active_dash_route == '/admin/services',
        }"
        >Services</v-list-item-title
      >
    </v-list-item>
  </v-list-group>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    goto_goods_products() {
      if (location.pathname != "/admin/goods_products") {
        this.$router.push("/admin/goods_products");
      }
    },
    goto_crypto() {
      if (location.pathname != "/admin/crypto") {
        this.$router.push("/admin/crypto");
      }
    },
    goto_services() {
      if (location.pathname != "/admin/services") {
        this.$router.push("/admin/services");
      }
    },
  },
  computed: {
    ...mapState(["dash_nav"]),
    dash_nav: {
      get() {
        return this.$store.state.dash_nav;
      },
      set(new_value) {
        this.$store.state.dash_nav = new_value;
      },
    },
  },
};
</script>
