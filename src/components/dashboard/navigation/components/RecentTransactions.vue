<template>
  <v-list two-line>
    <template v-for="(item, index) in items">
      <v-subheader v-if="item.header" :key="item.header" v-text="item.header" />

      <v-divider v-else-if="item.divider" :key="index" :inset="item.inset" />

      <v-list-item v-else :key="item.name">
        <v-list-item-avatar>
          <v-img :src="item.avatar" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="item.name" />
          <v-list-item-subtitle v-html="item.time" />
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text
            class="green--text text-body-2 font-weight-bold"
            v-text="item.amount"
          />
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
// @ts-nocheck
export default {
  data: () => ({
    items: [
      { header: "Recent transactions" },
      {
        avatar: require("../../../../assets/trust/Photo.png"),
        name: "Jummy Drake",
        time: `9 minutes ago`,
        amount: "₦2,349",
      },
      { divider: true, inset: true },
      {
        avatar: require("../../../../assets/trust/Photo2.png"),
        name: "Driks Denson",
        time: `15 minutes ago`,
        amount: "₦1,500",
      },
      { divider: true, inset: true },
      {
        avatar: require("../../../../assets/trust/Photo3.png"),
        name: "Peter Crouch",
        time: `24 minutes ago`,
        amount: "₦1,022",
      },
      { divider: true, inset: true },
      {
        avatar: require("../../../../assets/trust/Photo4.png"),
        name: "Manual williams",
        time: `35 minutes ago`,
        amount: "₦1,220",
      },
      { divider: true, inset: true },
      {
        avatar: require("../../../../assets/trust/Photo5.png"),
        name: "Fred Jude",
        time: `49 minutes ago`,
        amount: "₦3,800",
      },
      // { divider: true, inset: true },
    ],
  }),
}
</script>
