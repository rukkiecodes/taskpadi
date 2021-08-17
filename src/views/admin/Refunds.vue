<template>
  <v-container>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi sequi in
    quod provident quia totam commodi accusamus maxime accusantium, neque enim,
    officiis consequuntur voluptatum quibusdam dicta vitae magnam quidem. Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi sequi in quod
    provident quia totam commodi accusamus maxime accusantium, neque enim,
    officiis consequuntur voluptatum quibusdam dicta vitae magnam quidem. Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi sequi in quod
    provident quia totam commodi accusamus maxime accusantium, neque enim,
    officiis consequuntur voluptatum quibusdam dicta vitae magnam quidem. Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi sequi in quod
    provident quia totam commodi accusamus maxime accusantium, neque enim,
    officiis consequuntur voluptatum quibusdam dicta vitae magnam quidem. Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi sequi in quod
    provident quia totam commodi accusamus maxime accusantium, neque enim,
    officiis consequuntur voluptatum quibusdam dicta vitae magnam quidem.
  </v-container>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.check_dash_active_route();
    this.default_route();
    this.my_logs();
  },
  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      console.log("route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      this.dash_nav.active_dash_route = "/admin/refunds";
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
