<template>
  <Refunds />
</template>

<script>
export default {
  components: {
    Refunds: () => import("../../components/admin/refunds/Refunds.vue"),
  },
};
</script>
