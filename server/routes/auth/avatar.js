const router = require("express").Router()
const fs = require("fs")
const { avatar } = require("../../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const User = require("../../models/User")

router.post("/avatar", avatar, checkAuth, (req, res) => {
    const { email } = req.body

    const updateAvatar = async() => {
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
    }

    User.findOne({ email }).then((avatar) => {
        let userAvatar
        if (avatar.avatar) userAvatar = `./${avatar.avatar}`

        try {
            if (userAvatar) fs.unlinkSync(userAvatar)
            updateAvatar()
        } catch (err) {
            updateAvatar()
        }
    })
})

module.exports = router