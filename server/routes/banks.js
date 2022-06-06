const router = require("express").Router()

const axios = require('../config/axios')

const { getBanks } = require('../paystack')


router.get('get-bank',  async (req, res) => {
  const data = getBanks()
  res.send(data)
})

module.exports = router