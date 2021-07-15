<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track: provider_services.provider.track_1 == true,
      }"
    >
      <span class="text-caption">1</span>
    </div>
    <div
      :class="{
        active_track: provider_services.provider.track_2 == true,
      }"
      class="track mx-2"
    >
      <span class="text-caption">2</span>
    </div>
    <div
      :class="{
        active_track: provider_services.provider.track_3 == true,
      }"
      class="track mx-2"
    >
      <span class="text-caption">3</span>
    </div>
    <div
      :class="{
        active_track: provider_services.provider.track_4 == true,
      }"
      class="track mx-2"
    >
      <span class="text-caption">4</span>
    </div>
    <div
      :class="{
        active_track: provider_services.provider.track_5 == true,
      }"
      class="track mx-2"
    >
      <span class="text-caption">5</span>
    </div>
    <div
      :class="{
        active_track: provider_services.provider.track_6 == true,
      }"
      class="track mx-2"
    >
      <span class="text-caption">6</span>
    </div>
    <div
      :class="{
        active_track: provider_services.provider.track_7 == true,
      }"
      class="track mx-2"
    >
      <span class="text-caption">7</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["provider_services"]),
  },
};
</script>