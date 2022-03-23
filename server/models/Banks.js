const mongoose = require("mongoose")

const BankSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    bankId: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: String,
        required: true,
    },
    accountName: {
        type: String,
        required: true,
    },
    resolve: {
        type: Boolean,
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

module.exports = mongoose.model("Bank", BankSchema)