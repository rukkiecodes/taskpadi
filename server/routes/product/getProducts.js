const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const Product = require("../../models/Product")

router.get("/getProducts/:user", checkAuth, async (req, res) => {
    const user = req.params.user

    try {
        let product = await Product.find({ user })
        if (product.length)
            return res.status(200).json({
                message: "Products fetched successfully",
                success: true,
                product,
            })
        else
            res.status(200).json({
                success: false,
                message: "You have not created any product",
            })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Error fetching product",
            error,
        })
    }
})

module.exports = router