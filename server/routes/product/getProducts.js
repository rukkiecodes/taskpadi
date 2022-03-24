const router = require("express").Router()
const { image } = require(".././../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const Product = require("../../models/Product")

router.post("/getProducts", image, async(req, res) => {
    const { user, _id } = req.body

    try {
        let product = await Product.find({ user })
        return res.status(201).json({
            message: "Products fetched successfully",
            success: true,
            product,
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Error creating product. Please add an image",
            error,
        })
    }
})

module.exports = router