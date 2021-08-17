const good_and_product_buyer = {
  path: "/good_and_product_buyer",
  name: "Good and prodict buyer",
  component: () => import("../../views/Good_and_product_buyer.vue"),
  children: [
    {
      path: "",
      name: "Seller email",
      component: () =>
        import(
          "../../components/good_and_product_buyer/components/Seller_Email.vue"
        ),
    },
    {
      path: "seller_phone_number",
      name: "Seller phone number",
      component: () =>
        import(
          "../../components/good_and_product_buyer/components/Sellers_phone_number.vue"
        ),
    },
    {
      path: "product_name",
      name: "Seller phone number",
      component: () =>
        import(
          "../../components/good_and_product_buyer/components/Product_name.vue"
        ),
    },
    {
      path: "product_price",
      name: "Product price",
      component: () =>
        import(
          "../../components/good_and_product_buyer/components/Product_price.vue"
        ),
    },
    {
      path: "product_description",
      name: "Product description",
      component: () =>
        import(
          "../../components/good_and_product_buyer/components/Product_description.vue"
        ),
    },
    {
      path: "condition",
      name: "Product condition",
      component: () =>
        import("../../components/good_and_product_buyer/components/Condition.vue"),
    },
    {
      path: "handle_delivery",
      name: "Handle delivery",
      component: () =>
        import(
          "../../components/good_and_product_buyer/components/Handle_delivery.vue"
        ),
    },
  ],
};

export default good_and_product_buyer;