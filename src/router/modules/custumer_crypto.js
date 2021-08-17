export default {
  path: "/custumer_crypto",
  name: "Customer crypto",
  component: () => import("../../views/Custumer_crypto.vue"),
  children: [
    {
      path: "",
      name: "Customer email",
      component: () =>
        import("../../components/custumer_crypto/components/Customer_email.vue"),
    },
    {
      path: "custumer_phone",
      name: "Customer phone",
      component: () =>
        import("../../components/custumer_crypto/components/Customer_phone.vue"),
    },
    {
      path: "custumer_currency",
      name: "Customer currency",
      component: () =>
        import(
          "../../components/custumer_crypto/components/Customer_currency.vue"
        ),
    },
    {
      path: "custumer_amount",
      name: "Customer amount",
      component: () =>
        import("../../components/custumer_crypto/components/Customer_amount.vue"),
    },
    {
      path: "custumer_price",
      name: "Customer price",
      component: () =>
        import("../../components/custumer_crypto/components/Customer_price.vue"),
    },
    {
      path: "custumer_transaction_duration",
      name: "Customer transaction duration",
      component: () =>
        import(
          "../../components/custumer_crypto/components/Customer_transaction_duration.vue"
        ),
    },
    {
      path: "custumer_wallet_address",
      name: "Customer wallet address",
      component: () =>
        import(
          "../../components/custumer_crypto/components/Customer_wallet_address.vue"
        ),
    },
  ],
};
