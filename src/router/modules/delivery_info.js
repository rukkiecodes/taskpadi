const delivery_info = {
  path: "/delivery_info",
  name: "delivery_info",
  component: () => import("../../views/Delivery_info.vue"),
  children: [
    {
      path: "",
      name: "Delivery info product name",
      component: () =>
        import("../../components/delivery_info/components/Product_name.vue"),
    },
    {
      path: "product_size",
      name: "Product size",
      component: () =>
        import("../../components/delivery_info/components/Product_size.vue"),
    },
    {
      path: "product_image",
      name: "Product image",
      component: () =>
        import("../../components/delivery_info/components/Product_image.vue"),
    },
    {
      path: "residential_address",
      name: "Residential address",
      component: () =>
        import(
          "../../components/delivery_info/components/Residential_address.vue"
        ),
    },
    {
      path: "state_address",
      name: "State address",
      component: () =>
        import("../../components/delivery_info/components/State_address.vue"),
    },
  ],
};

export default delivery_info;
