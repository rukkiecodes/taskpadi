const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const Transaction = require("../../models/Transaction")

router.post("/getTransaction", checkAuth, async(req, res) => {
    const { user } = req.body
    try {
        const transaction = await Transaction.find({ user })
        if (transaction.length)
            res.status(200).json({
                transaction,
                success: true,
                message: "Fetch transaction successfully",
            })
        else
            res.status(200).json({
                success: false,
                message: "You have not created any transaction",
            })
    } catch (error) {
        return res.status(401).json({
            error,
            success: false,
            message: "Error fetching transactions",
        })
    }
})

module.exports = router