const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const Transaction = require("../../models/Transaction")

router.post("/declineTransaction", checkAuth, async(req, res) => {
    const { user, _id } = req.body
    try {
        const transaction = await Transaction.updateOne({
            $and: [{ user }, { _id }],
        }, {
            $set: {
                declined: false,
                status: "pending",
                confirmed: true,
            },
        }).exec()
        res.status(200).json({
            transaction,
            success: true,
            message: "Transaction successfully declined",
        })
    } catch (error) {
        return res.status(401).json({
            error,
            success: false,
            message: "Error declining transaction",
        })
    }
})

module.exports = router