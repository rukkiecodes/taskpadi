const mongoose = require("mongoose")

const newOrderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  status: {
    type: String,
    default: "pending",
  },
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  buyerEmail: {
    type: String,
    required: true,
  },
  buyerPhone: {
    type: String,
    required: true,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reference: {
    type: String
  },
  totalCost: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  charge: {
    type: Number,
    required: true,
  },
}, { timestamps: true })

module.exports = mongoose.model("Order", newOrderSchema)