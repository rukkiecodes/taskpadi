<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track: custumers_crypto.custumer.track_1 == true,
      }"
    ></div>
    <div
      :class="{
        active_track: custumers_crypto.custumer.track_2 == true,
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track: custumers_crypto.custumer.track_3 == true,
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track: custumers_crypto.custumer.track_4 == true,
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track: custumers_crypto.custumer.track_5 == true,
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track: custumers_crypto.custumer.track_6 == true,
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track: custumers_crypto.custumer.track_7 == true,
      }"
      class="track mx-2"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["custumers_crypto"]),
  },
};
</script>