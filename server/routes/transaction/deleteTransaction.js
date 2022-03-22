const router = require("express").Router()
const fs = require("fs")
const checkAuth = require("../../middleware/checkAuth")

const Transaction = require("../../models/Transaction")

router.post("/deleteTransaction", async(req, res) => {
    const { user, _id } = req.body

    const deleteTransaction = () => {
        Transaction.deleteOne({ $and: [{ user }, { _id }] })
            .exec()
            .then((transaction) => {
                res.status(200).json({
                    transaction,
                    success: true,
                    message: "transaction deleted successfully",
                })
            })
            .catch((error) => {
                return res.status(401).json({
                    error,
                    success: false,
                    message: "Error deleting transaction",
                })
            })
    }

    Transaction.findOne({ $and: [{ user }, { _id }] }).then((image) => {
        let pop
        let transactionImage
        if (image.image) transactionImage = `./${image.image}`
        if (image.pop) pop = `./${image.pop}`

        try {
            if (transactionImage) fs.unlinkSync(transactionImage)
            if (pop) fs.unlinkSync(pop)
            deleteTransaction()
        } catch (err) {
            deleteTransaction()
        }
    })
})

module.exports = router