<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track:
          delivery_info.delivery.track_1 == true ||
          delivery_info.delivery.product_name_input != '',
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          delivery_info.delivery.track_2 == true ||
          delivery_info.delivery.product_size != '',
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          delivery_info.delivery.track_3 == true ||
          delivery_info.delivery.product_image.length != 0,
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          delivery_info.delivery.track_4 == true ||
          delivery_info.delivery.delivery_address != '',
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          delivery_info.delivery.track_5 == true ||
          delivery_info.delivery.state_of_residence !=
            '',
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