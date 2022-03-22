const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const Transaction = require("../../models/Transaction")

router.post("/approveTransaction", async(req, res) => {
    const { user, _id } = req.body
    try {
        const transaction = await Transaction.updateOne({
            $and: [{ user }, { _id }],
        }, {
            $set: {
                status: "approved",
                approved: true,
            },
        }).exec()
        res.status(200).json({
            transaction,
            success: true,
            message: "Transaction successfully approved",
        })
    } catch (error) {
        return res.status(401).json({
            error,
            success: false,
            message: "Error approving transaction",
        })
    }
})

module.exports = router