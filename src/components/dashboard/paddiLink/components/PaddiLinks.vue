<template>
  <v-expansion-panels popout>
    <v-expansion-panel v-for="(link, i) in paddiLinks" :key="i">
      <v-expansion-panel-header>
        <div>
          <v-avatar rounded>
            <v-img :src="link.image" :alt="link.title + 'image'" />
          </v-avatar>
          <span
            class="grey--text text--darken-3 text-body-1 font-weight-bold ml-4"
            >{{ link.title }}</span
          >
        </div>
        <template v-slot:actions>
          <v-btn
            color="deep-purple accent-4"
            class="text-capitalize rounded-lg"
            depressed
            small
            dark
            >view link</v-btn
          >
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ link.price }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn color="green" class="text-capitalize" small dark depressed
                >Edit link</v-btn
              >
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-row justify="start" align="start">
          <v-col cols="12" sm="6" lg="4">
            <v-card max-width="300">
              <v-img :src="link.image" :alt="link.title + 'image'"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="8">
            <v-card color="transparent" max-width="100%" flat>
              <v-card-text class="grey--text text--darken-3 text-body-1">
                {{ link.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(["paddiLinks"]),
  },
}
</script>
