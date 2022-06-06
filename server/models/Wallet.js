const mongoose = require("mongoose")

const walletSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true,
  },
  withdrawalAmount: {
    type: Number,
    required: true,
  },
  trustAmount: {
    type: Number,
    required: true,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true })

module.exports = mongoose.model("Wallet", walletSchema)