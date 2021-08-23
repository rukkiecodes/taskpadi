<template>
  <v-card flat class="rounded-lg" color="white">
    <v-card-text class="ma-0 pa-5 pa-sm-5 pb-0 pb-sm-0">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="user_data.name"
            label="Name"
            dense
            outlined
            color="indigo accent-4"
            class="rounded-lg"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="user_data.email"
            label="Email"
            outlined
            dense
            color="indigo accent-4"
            class="rounded-lg"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="user_data.phone"
            label="Phone"
            outlined
            dense
            color="indigo accent-4"
            class="rounded-lg"
          ></v-text-field>
        </v-col>
        <v-col v-show="false" cols="12" sm="6">
          <v-text-field
            v-model="support_ticket_data.id"
            label="Transaction Id"
            outlined
            dense
            color="indigo accent-4"
            class="rounded-lg"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="support_ticket_data.subject"
            label="Subject"
            outlined
            dense
            color="indigo accent-4"
            class="rounded-lg"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="support_ticket_data.description"
            label="Description"
            outlined
            dense
            height="100"
            color="indigo accent-4"
            class="rounded-lg"
          ></v-textarea>
        </v-col>
        <v-col class="pb-0" cols="12" sm="6">
          <v-file-input
            multiple
            show-size
            label="Image(*Optional)"
            outlined
            dense
            truncate-length="50"
            class="rounded-lg"
          ></v-file-input>
        </v-col>
        <v-col class="pb-0" cols="12" sm="6">
          <v-btn
            depressed
            color="indigo accent-4"
            class="white--text text-capitalize rounded-lg"
            block
            height="40"
            >Create support ticket</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    user_data: {
      name: "Amagboro Terry Oghenerukewe",
      email: "rukkiecodes@gmail.com",
      phone: "+2348071657443",
    },
    support_ticket_data: {
      id: "verg45g4n4344g3",
      subject: "",
      description: "",
    },
  }),
};
</script>
