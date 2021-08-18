<template>
  <Customer_support />
</template>

<script>
export default {
  components: {
    Customer_support: () =>
      import("../../components/admin/customer_support/Customer_support.vue"),
  },
};
</script>
