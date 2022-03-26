const router = require("express").Router()
const cloudinary = require("../../middleware/cloud")
const upload = require("../../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const Transaction = require("../../models/Transaction")

router.post("/transactionProofOfPayment", upload.single("pop"), async(req, res) => {
    const { user, _id } = req.body
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: process.env.CLOUDINARY_FOLDER,
        })

        const transaction = await Transaction.updateOne({
            $and: [{ user }, { _id }],
        }, {
            $set: {
                pop: result.secure_url,
            },
        }).exec()
        res.status(200).json({
            transaction,
            success: true,
            message: "Proof of payment successfully updated",
        })
    } catch (error) {
        return res.status(401).json({
            error,
            success: false,
            message: "Error updating proof of payment",
        })
    }
})

module.exports = router