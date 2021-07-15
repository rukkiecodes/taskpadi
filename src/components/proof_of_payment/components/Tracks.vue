<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track: proof_of_payment.proof.track_1 == true,
      }"
    ><span class="text-caption">1</span></div>
    <div
      :class="{
        active_track: proof_of_payment.proof.track_2 == true,
      }"
      class="track mx-2"
    ><span class="text-caption">2</span></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["proof_of_payment"]),
  },
};
</script>