const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    referral_code: {
        type: String,
    },
    avatar: {
        type: String,
    },
    phone: {
        type: String,
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    lga: {
        type: String,
    },
    address: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true })

module.exports = mongoose.model("User", UserSchema)