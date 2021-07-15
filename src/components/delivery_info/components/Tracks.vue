<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track: delivery_info.delivery.track_1 == true,
      }"
    >
      <span class="text-caption">1</span>
    </div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          delivery_info.delivery.track_2 == true ||
          delivery_info.delivery.state_of_residence != '',
      }"
    >
      <span class="text-caption">2</span>
    </div>
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