const mongoose = require("mongoose")

const SupportTicket = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  status: {
    type: String,
    default: "pending",
  },
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("SupportTicket", SupportTicket)
