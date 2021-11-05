<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title>
        <v-spacer /> 
        <v-btn icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum
        enim esse ducimus! Rerum, eius. Cumque repellendus dignissimos voluptate
        quia assumenda quae maiores. Adipisci ullam voluptatibus similique
        nesciunt eos. Dolorum!
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: true
  })
}
</script>
