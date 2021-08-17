const good_and_prodict_seller = {
  path: "/good_and_prodict_seller",
  name: "good and prodict seller",
  component: () => import("../../views/Good_and_prodict_seller.vue"),
  children: [
    {
      path: "",
      name: "Buyers email",
      component: () =>
        import(
          "../../components/good_and_prodict_seller/components/Buyers_email.vue"
        ),
    },
    {
      path: "buyers_phone",
      name: "Buyers phone",
      component: () =>
        import(
          "../../components/good_and_prodict_seller/components/Buyers_phone.vue"
        ),
    },
    {
      path: "transaction_title",
      name: "Buyers transaction title",
      component: () =>
        import(
          "../../components/good_and_prodict_seller/components/Transction_title.vue"
        ),
    },
    {
      path: "buyers_product_description",
      name: "Buyers product description",
      component: () =>
        import(
          "../../components/good_and_prodict_seller/components/Buyers_product_description.vue"
        ),
    },
    {
      path: "buyers_agreed_price",
      name: "Buyers agreed price",
      component: () =>
        import(
          "../../components/good_and_prodict_seller/components/Agreed_price.vue"
        ),
    },
    {
      path: "buyers_product_photo",
      name: "Buyers product photo",
      component: () =>
        import(
          "../../components/good_and_prodict_seller/components/Buyers_product_photo.vue"
        ),
    },
    {
      path: "buyers_product_condition",
      name: "Buyers product condition",
      component: () =>
        import(
          "../../components/good_and_prodict_seller/components/Buyers_product_condition.vue"
        ),
    },
    {
      path: "buyers_product_image",
      name: "Buyers product image",
      component: () =>
        import(
          "../../components/good_and_prodict_seller/components/Buyers_product_image.vue"
        ),
    },
  ],
};

export default good_and_prodict_seller;
