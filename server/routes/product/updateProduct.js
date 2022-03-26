const router = require("express").Router()
const fs = require("fs")
const cloudinary = require("../../middleware/cloud")
const upload = require("../../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const Product = require("../../models/Product")

router.post("/updateProduct", upload.single("image"), async(req, res) => {
    const { user, _id, name, description, quantity, price } = req.body

    let charge = (20 / 100) * price
    let total = Number(charge) + Number(price)

    try {
        let result
        let product

        if (req.file) {
            // Upload image to cloudinary
            result = await cloudinary.uploader.upload(req.file.path, {
                folder: process.env.CLOUDINARY_FOLDER,
            })

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
                    image: result.secure_url,
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
})

module.exports = router