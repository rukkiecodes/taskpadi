const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    let decoded = jwt.verify(token, process.env.SESSION_SECRET)
    req.userData = decoded
    next()
  } catch (error) {
    res.status(401).json({
      message: "Auth failed",
      success: false,
    })
  }
}
