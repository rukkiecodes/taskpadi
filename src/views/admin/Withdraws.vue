<template>
  <v-container>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
    minus soluta voluptatibus nisi. Voluptate temporibus adipisci quidem,
    ducimus explicabo esse maiores perferendis consequuntur, culpa voluptas
    ullam itaque quaerat quam. Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Reiciendis quo minus soluta voluptatibus nisi. Voluptate
    temporibus adipisci quidem, ducimus explicabo esse maiores perferendis
    consequuntur, culpa voluptas ullam itaque quaerat quam. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Reiciendis quo minus soluta
    voluptatibus nisi. Voluptate temporibus adipisci quidem, ducimus explicabo
    esse maiores perferendis consequuntur, culpa voluptas ullam itaque quaerat
    quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
    quo minus soluta voluptatibus nisi. Voluptate temporibus adipisci quidem,
    ducimus explicabo esse maiores perferendis consequuntur, culpa voluptas
    ullam itaque quaerat quam. Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Reiciendis quo minus soluta voluptatibus nisi. Voluptate
    temporibus adipisci quidem, ducimus explicabo esse maiores perferendis
    consequuntur, culpa voluptas ullam itaque quaerat quam. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Reiciendis quo minus soluta
    voluptatibus nisi. Voluptate temporibus adipisci quidem, ducimus explicabo
    esse maiores perferendis consequuntur, culpa voluptas ullam itaque quaerat
    quam.
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  mounted() {
    this.check_dash_active_route();
    this.default_route();
    this.my_logs();
  },
  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      console.log("menu route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      this.dash_nav.active_dash_route = "/admin/withdraws";
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
