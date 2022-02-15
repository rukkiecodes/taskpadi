<template>
  <div class="viewTrnsaction">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure numquam at
    eum repellat quaerat quisquam inventore sed tempora animi! Incidunt, a
    labore. Nesciunt voluptatibus consectetur ad maxime nulla ab. Expedita!
  </div>
</template>

<script>
// @ts-nocheck
import { mapState } from "vuex"
export default {
  data: () => ({}),
  computed: {
    ...mapState(["transaction"]),
  },
}
</script>
