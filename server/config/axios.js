const axios = require('axios')
const secret = process.env.PAYSTACK_SECRET_KEY
axios.defaults.headers.common.Authorization = `Bearer ${secret}`

module.exports = axios