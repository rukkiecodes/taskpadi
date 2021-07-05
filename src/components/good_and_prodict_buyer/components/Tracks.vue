<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{ active_track: good_and_product.seller_email_input != '' }"
    ></div>
    <div
      class="track mx-2"
      :class="{ active_track: good_and_product.seller_phone_input != '' }"
    ></div>
    <div
      class="track mx-2"
      :class="{ active_track: good_and_product.product_name_input != '' }"
    ></div>
    <div
      class="track mx-2"
      :class="{ active_track: good_and_product.agreed_price_input != '' }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track: good_and_product.product_description_input != '',
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{ active_track: good_and_product.product_condition_input != '' }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track: good_and_product.who_can_handle_delivery_input != '',
      }"
    ></div>
  </div>
</template>
