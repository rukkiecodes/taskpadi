const router = require("express").Router()
const mongoose = require("mongoose")
const { image } = require(".././../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const Transaction = require("../../models/Transaction")

router.post("/createTransaction", image, async(req, res) => {
    const {
        user,
        recipientName,
        recipientEmail,
        recipientPhone,
        transactionType,
        price,
        quantity,
        role,
        description,
        duration,
    } = req.body

    let subTotal = parseFloat(price)
    let charge = subTotal + subTotal * 0.2

    try {
        let transaction = await Transaction.create({
            _id: new mongoose.Types.ObjectId(),
            user,
            recipientName,
            recipientEmail,
            recipientPhone,
            transactionType,
            price,
            quantity,
            role,
            description,
            duration,
            charge,
            image: req.file.path,
        })
        return res.status(201).json({
            message: "Transaction successfully created",
            success: true,
            transaction,
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Error creating transaction. Please add an image",
            error,
        })
    }
})

module.exports = router