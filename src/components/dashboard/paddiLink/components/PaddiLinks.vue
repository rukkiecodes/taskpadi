<template>
  <v-expansion-panels flat>
    <v-expansion-panel v-for="(link, i) in paddiLinks" :key="i">
      <v-expansion-panel-header>
        <div>
          <v-avatar>
            <v-img :src="link.image" :alt="link.title + 'image'" />
          </v-avatar>
          <span
            class="blue--text text-decoration-underline text-body-1 font-weight-bold ml-4"
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
              <v-list-item-title
                >Product Name: <b>{{ link.title }}</b></v-list-item-title
              >
              <v-list-item-subtitle
                >Price: <b>{{ link.price }}</b></v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <div class="d-flex">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="editPaddiLink(link)"
                      color="green"
                      class="text-capitalize mr-3"
                      small
                      icon
                      dark
                      depressed
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit link</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      color="blue"
                      class="text-capitalize"
                      small
                      icon
                      dark
                      depressed
                    >
                      <v-icon>mdi-content-copy</v-icon>
                    </v-btn>
                  </template>
                  <span>Copy link</span>
                </v-tooltip>
              </div>
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
import { mapActions, mapGetters } from "vuex"
export default {
  methods: {
    ...mapActions(["editPaddiLink"]),
  },
  computed: {
    ...mapGetters(["paddiLinks"]),
  },
}
</script>
