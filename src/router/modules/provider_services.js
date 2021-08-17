export default {
  path: "/provider_services",
  name: "Provider services",
  component: () => import("../../views/Provider_services.vue"),
  children: [
    {
      path: "",
      name: "Provider email",
      component: () =>
        import("../../components/provider_services/components/Provider_email.vue"),
    },
    {
      path: "provider_phone",
      name: "Provider phone",
      component: () =>
        import("../../components/provider_services/components/Provider_phone.vue"),
    },
    {
      path: "available_services",
      name: "Provider services to render",
      component: () =>
        import(
          "../../components/provider_services/components/Provider_services_to_render.vue"
        ),
    },
    {
      path: "provider_transaction_duration",
      name: "Provider transaction duration",
      component: () =>
        import(
          "../../components/provider_services/components/Provider_services_duration.vue"
        ),
    },
    {
      path: "provider_amount",
      name: "Provider amount",
      component: () =>
        import(
          "../../components/provider_services/components/Provider_amount.vue"
        ),
    },
    {
      path: "provider_when_to_pay",
      name: "Provider when to pay",
      component: () =>
        import(
          "../../components/provider_services/components/Provider_when_to_pay.vue"
        ),
    },
    {
      path: "provider_contract_terms",
      name: "Provider contract terms",
      component: () =>
        import(
          "../../components/provider_services/components/Provider_contract_terms.vue"
        ),
    },
  ],
};
