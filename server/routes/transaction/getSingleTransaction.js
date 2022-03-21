const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const Transaction = require("../../models/Transaction")

router.post("/getSingleTransaction", async(req, res) => {
    const { user, _id } = req.body
    try {
        const transaction = await Transaction.find({
            $and: [{ user }, { _id }],
        })
        if (transaction.length)
            res.status(200).json({
                transaction,
                success: true,
                message: "Fetched transaction successfully",
            })
    } catch (error) {
        return res.status(401).json({
            error,
            success: false,
            message: "Error geting transaction",
        })
    }
})

module.exports = router