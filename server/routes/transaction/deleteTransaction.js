const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const Transaction = require("../../models/Transaction")

router.post("/deleteTransaction", async(req, res) => {
    const { user, _id } = req.body
    try {
        const transaction = await Transaction.deleteOne({
            $and: [{ user }, { _id }],
        })
        res.status(200).json({
            transaction,
            success: true,
            message: "transaction deleted successfully",
        })
    } catch (error) {
        return res.status(401).json({
            error,
            success: false,
            message: "Error deleting transaction",
        })
    }
})

module.exports = router