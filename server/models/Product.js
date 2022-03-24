const mongoose = require("mongoose")

const Product = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    status: {
        type: String,
        default: "pending",
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
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
    total: {
        type: String,
        required: true,
    },
    link: {
        type: Array,
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
}, { timestamps: true })

module.exports = mongoose.model("Product", Product)