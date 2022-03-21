const mongoose = require("mongoose")

const Transaction = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    status: {
        type: String,
        default: "pending",
    },
    approved: {
        type: Boolean,
        default: false,
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    declined: {
        type: Boolean,
        default: false,
    },
    recipientName: {
        type: String,
        required: true,
    },
    recipientEmail: {
        type: String,
        required: true,
    },
    recipientPhone: {
        type: String,
        required: true,
    },
    transactionType: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    charge: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    image: {
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

module.exports = mongoose.model("Transaction", Transaction)