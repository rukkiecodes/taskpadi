const edited_item = {
  SN: "",
  product_name: "",
  product_type: null,
  product_quantity: null,
  product_amount: null,
  start_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10),
  end_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10),
  product_status: "",
  product_action: "mdi-eye-outline",
};

export default edited_item