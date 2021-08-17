export default {
  path: "/trader_crypto",
  name: "Trader crypto",
  component: () => import("../../views/Trader_crypto.vue"),
  children: [
    {
      path: "",
      name: "Trader email",
      component: () =>
        import("../../components/trader_crypto/components/Trader_email.vue"),
    },
    {
      path: "trader_phone",
      name: "Trader phone",
      component: () =>
        import("../../components/trader_crypto/components/Trader_phone.vue"),
    },
    {
      path: "trader_currency",
      name: "Trader currency",
      component: () =>
        import("../../components/trader_crypto/components/Trader_currency.vue"),
    },
    {
      path: "trader_amount",
      name: "Trader amount",
      component: () =>
        import("../../components/trader_crypto/components/Trader_amount.vue"),
    },
    {
      path: "trader_price",
      name: "Trader price",
      component: () =>
        import("../../components/trader_crypto/components/Trader_price.vue"),
    },
    {
      path: "Trader_transaction_duration",
      name: "Trader transaction duration",
      component: () =>
        import(
          "../../components/trader_crypto/components/Trader_transaction_duration.vue"
        ),
    },
  ],
};
