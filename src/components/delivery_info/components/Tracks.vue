<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track: delivery_info.delivery.track_1 == true,
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track: delivery_info.delivery.track_2 == true,
      }"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["delivery_info"]),
  },
};
</script>