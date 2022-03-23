const router = require("express").Router()
const { avatar } = require("../../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const User = require("../../models/User")

router.post("/avatar", avatar, checkAuth, async(req, res) => {
    const { email } = req.body
    try {
        console.log(req.file)
        let user = await User.updateOne({ email }, { $set: { avatar: req.file.path } })
        res.status(200).json({
            message: "Avatar updated",
            success: true,
            user,
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Auth failed",
            error,
        })
    }
})

module.exports = router