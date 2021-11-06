<template>
  <v-col cols="12" sm="6" lg="8">
    <v-card flat color="transparent">
      <v-list color="transparent">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold"
              >GORE-TEXNike</v-list-item-title
            >
            <v-list-item-subtitle>Nike Air Force 1</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn color="red" icon large>
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card flat color="transparent">
      <v-card-title>
        <span class="text-h6 font-weight-medium">Description;</span>
        <v-spacer />
        <span class="text-h4 font-weight-bold">$235</span>
      </v-card-title>

      <v-card-text class="d-flex justify-start align-center py-0 pl-2 my-0">
        <v-rating
          v-model="rating"
          background-color="yellow"
          color="yellow accent-4"
          length="5"
          readonly
          dense
          half-increments
          hover
          size="20"
        ></v-rating>
        <span>{{ rating }} Stars</span>
      </v-card-text>
      <v-card-text>
        The GORE-TEX lining, large lugs on the outsole and removable silicone
        ankle strap toughen up the icon while the padded, high-cut collar keeps
        the heritage b-ball look and hardwood comfort. Size 45
      </v-card-text>
      <v-card-text>
        <p
          v-for="(detail, i) in subDetail"
          :key="i"
          class="grey--text text--darken-4 text-body-2"
        >
          {{ detail.title }}:
          <span class="font-weight-bold">{{ detail.name }}</span>
        </p>
      </v-card-text>

      <v-card-text>
        <v-btn
          color="deep-purple accent-4"
          class="text-capitalize mr-3"
          dark
          large
          depressed
          >Buy Now</v-btn
        >
        <v-btn
          color="teal darken-2"
          class="text-capitalize"
          dark
          large
          depressed
          >Negotiate</v-btn
        >
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    rating: 3.5,

    subDetail: [
      {
        title: "Category",
        name: "Fashion",
      },
      {
        title: "Condition",
        name: "New",
      },
      {
        title: "Status",
        name: "Negotiable",
      },
      {
        title: "Viewed by",
        name: "1,289",
      },
      {
        title: "Location",
        name: "Yaba, Lagos",
      },
    ],
  }),
}
</script>
