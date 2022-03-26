const router = require("express").Router()
const mongoose = require("mongoose")
const cloudinary = require("../../middleware/cloud")
const upload = require("../../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const Transaction = require("../../models/Transaction")

router.post("/createTransaction", upload.single("image"), checkAuth, async(req, res) => {
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

    let charge = (20 / 100) * price
    let total = Number(charge) + Number(price)
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: process.env.CLOUDINARY_FOLDER,
        })

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
            total,
            image: result.secure_url,
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