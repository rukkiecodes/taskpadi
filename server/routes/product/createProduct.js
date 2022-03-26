const router = require("express").Router()
const mongoose = require("mongoose")
const cloudinary = require("../../middleware/cloud")
const upload = require("../../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const Product = require("../../models/Product")
const User = require("../../models/User")

router.post("/createProduct", upload.single("image"), async(req, res) => {
    const { user, name, description, quantity, price } = req.body
    let _id = new mongoose.Types.ObjectId()

    let charge = (20 / 100) * price
    let total = Number(charge) + Number(price)

    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: process.env.CLOUDINARY_FOLDER,
        })

        let merchant = await User.findOne({ user })
        let product = await Product.create({
            _id,
            user,
            name,
            description,
            quantity,
            price,
            charge,
            total,
            link: [user, _id],
            paddiLink: `https://paddiproduct.web.app/${_id}`,
            merchant: [merchant],
            image: result.secure_url,
        })
        return res.status(201).json({
            message: "Product successfully created",
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