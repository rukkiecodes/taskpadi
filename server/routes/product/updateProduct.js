const router = require("express").Router()
const fs = require("fs")
const { image } = require(".././../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const Product = require("../../models/Product")

router.post("/updateProduct", image, async(req, res) => {
    const { user, _id, name, description, quantity, price } = req.body

    let charge = (20 / 100) * price
    let total = Number(charge) + Number(price)

    const updateProduct = async() => {
        try {
            let product
            if (req.file) {
                product = await Product.updateOne({
                    $and: [{ user }, { _id }],
                }, {
                    $set: {
                        name,
                        description,
                        quantity,
                        price,
                        charge,
                        total,
                        image: req.file.path,
                    },
                }).exec()
                res.status(200).json({
                    product,
                    success: true,
                    message: "Product successfully updated",
                })
            } else {
                product = await Product.updateOne({
                    $and: [{ user }, { _id }],
                }, {
                    $set: {
                        name,
                        description,
                        quantity,
                        price,
                        charge,
                        total,
                    },
                }).exec()
                res.status(200).json({
                    Product,
                    success: true,
                    message: "Product successfully updated",
                })
            }
        } catch (error) {
            return res.status(401).json({
                error,
                success: false,
                message: "Error updating product",
            })
        }
    }

    Product.findOne({ $and: [{ user }, { _id }] }).then((image) => {
        let productImage
        if (image.image) productImage = `./${image.image}`

        try {
            if (productImage) fs.unlinkSync(productImage)
            updateProduct()
        } catch (err) {
            updateProduct()
        }
    })
})

module.exports = router