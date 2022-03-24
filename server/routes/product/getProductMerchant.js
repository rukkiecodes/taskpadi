const router = require("express").Router()
const { image } = require(".././../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const Product = require("../../models/Product")
const User = require("../../models/User")

router.post("/getProductMerchant", image, async(req, res) => {
    const { user, _id } = req.body

    Product.findOne({ _id })
        .exec()
        .then((product) => {
            User.findOne({ _id: product.user }).then((user) =>
                res.status(200).json(user)
            )
        })
})

module.exports = router