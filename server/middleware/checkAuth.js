const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  try {
    let decoded = jwt.verify(req.body.token, process.env.SESSION_SECRET)
    req.userData = decoded
    next()
  } catch (error) {
    res.status(401).json({
      message: "Auth failed",
      success: false,
    })
  }
}
