<template>
  <v-container class="testimonials mt-16">
    <v-row justify="space-between" align="start">
      <v-col class="text-center text-heading text-sm-h6 text-md-h5" cols="12">
        <h1>Testimonials</h1>
      </v-col>
    </v-row>
    <v-row class="mt-8" justify="space-between" align="start">
      <v-col cols="12">
        <v-row align="center">
          <v-item-group
            v-model="window"
            class="shrink mr-6"
            mandatory
          >
            <v-item
              v-for="(card, index) in testimonials.slice(0, 5)"
              :key="index"
              v-slot="{ active, toggle }"
            >
              <div>
                <v-btn color="indigo accent-4" :input-value="active" icon @click="toggle">
                  <v-icon>mdi-record</v-icon>
                </v-btn>
              </div>
            </v-item>
          </v-item-group>

          <v-col>
            <v-window v-model="window" class="elevation-0 rounded-xl" vertical>
              <v-window-item
                v-for="(card, index) in testimonials.slice(0, 5)"
                :key="index"
                class="rounded-xl"
              >
                <v-card color="white" class="rounded-xl pa-4" flat>
                  <v-card-text>
                    <v-row class="mb-4 pa-2" align="center">
                      <v-avatar
                        size="40"
                        color="indigo accent-4"
                        class="mr-4 text-uppercase white--text"
                        v-text="card.title.slice(0, 2)"
                      />
                      <strong class="text-h6" v-text="card.title" />
                    </v-row>

                    <p v-text="card.position" />
                    <p v-text="card.text" />
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import testimonials from "./testimonials"
export default {
  data: () => ({
    window: 0,
    testimonials
  }),
};
</script>
