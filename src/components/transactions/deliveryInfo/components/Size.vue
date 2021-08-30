<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-row>
        <v-col cols="10">
          <v-slider
            color="deep-purple accent-4"
            dense
            min="0"
            max="100"
            value="5"
            step="1"
            ticks
            :thumb-size="24"
            thumb-label
            hide-details
            full-width
            v-model="deliveryInfo.deliveryInfoInputs.size"
          ></v-slider>
        </v-col>
        <v-col cols="2">
          <v-text-field
            color="deep-purple accent-4"
            dense
            outlined
            full-width
            hide-details
            placeholder="M/U"
            v-model="deliveryInfo.deliveryInfoInputs.sizeMesurmentUnit"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["deliveryInfo"]),
  },
};
</script>
