<template>
  <v-container class="mt-16">
    <v-img
      lazy-src="../../../assets/trust/home/map.png"
      src="../../../assets/trust/home/map.png"
      class="f-flex justify-center align-center"
    >
      <v-sheet
        class="mx-auto groupSheet"
        elevation="0"
        color="transparent"
        :max-width="groupSheetWidth"
      >
        <v-slide-group class="py-4" show-arrows>
          <v-slide-item
            class="mr-4"
            v-for="(testimony, i) in testimonies"
            :key="i"
          >
            <v-card class="rounded-lg ma-2" color="white" width="300">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img :src="testimony.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="testimony.name"
                      style="font-family: 'Montserrat', sans-serif !important;"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-text
                style="font-family: 'Montserrat', sans-serif !important;"
              >
                <v-icon color="#210070" size="30">mdi-format-quote-open</v-icon>
                {{ testimony.body }}
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-img>
  </v-container>
</template>

<script>
// @ts-nocheck
import testimonies from "./testimonies"
export default {
  data: () => ({
    groupSheetWidth: null,
    groupSheetHeight: null,
    testimonies,
  }),
  mounted() {
    const groupSheet = document.querySelector(".groupSheet")

    this.groupSheetWidth = groupSheet.offsetWidth
    this.groupSheetHeight = groupSheet.offsetHeight
  },
}
</script>
