export default {
  path: "/client_services",
  name: "Client services",
  component: () => import("../../views/Client_services.vue"),
  children: [
    {
      path: "",
      name: "Client name",
      component: () =>
        import("../../components/client_services/components/Client_name.vue"),
    },
    {
      path: "client_phone",
      name: "Client phone",
      component: () =>
        import("../../components/client_services/components/Client_phone.vue"),
    },
    {
      path: "available_services",
      name: "Client services to render",
      component: () =>
        import(
          "../../components/client_services/components/Client_services_to_render.vue"
        ),
    },
    {
      path: "client_transaction_duration",
      name: "Client transaction duration",
      component: () =>
        import(
          "../../components/client_services/components/Client_services_duration.vue"
        ),
    },
    {
      path: "client_amount",
      name: "Client amount",
      component: () =>
        import("../../components/client_services/components/Client_amount.vue"),
    },
    {
      path: "client_when_to_pay",
      name: "Client when to pay",
      component: () =>
        import(
          "../../components/client_services/components/Client_when_to_pay.vue"
        ),
    },
    {
      path: "client_contract_terms",
      name: "Client contract terms",
      component: () =>
        import(
          "../../components/client_services/components/Client_contract_terms.vue"
        ),
    },
  ],
};
