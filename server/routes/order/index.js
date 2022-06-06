const router = require("express").Router()
const mongoose = require("mongoose")
const Order = require("../../models/Order")
const Product = require("../../models/Product")
const User = require("../../models/User")
const checkAuth = require("../../middleware/checkAuth")

const { initPay, verifyTx } = require('../../paystack')

router.post("/create-order", checkAuth, async(req, res, next) => {
    let {
      productId,
      buyerEmail,
      buyerPhone,
      sellerId,
      quantity
    } = req.body

    if(!quantity) quantity = 1
    try {
      if(!buyerEmail || !buyerPhone) throw new Error('Added buyers details')
      const product = await Product.findById(productId)
      if (!product) {
        const error = new Error('No product found')
        error.statusCode = 401
        throw error
      }

      const user = await User.findById(sellerId)

      if (!user) {
        const error = new Error('No user found')
        error.statusCode = 401
        throw error
      }
      
      let price = product.price
      price = price * quantity
      let charge = (20 / 100) * price
      let totalCost = Number(charge) + Number(price)

      let _id = new mongoose.Types.ObjectId()

        // Create payment with paystack
        const metadata = {
					paymentForm: 'Order',
					orderId: _id,
          productId: productId,
					sellerId: sellerId,
					buyerEmail: buyerEmail,
        }
        const data = await initPay(buyerEmail, totalCost, '', metadata)

        const order = await new Order({
          _id,
          productId,
          buyerEmail,
          buyerPhone,
          sellerId,
          totalCost,
          quantity,
          price,
          charge,
          reference: data.data.reference,
        })
        await order.save()
        res.status(201).json({
            message: "Order successfully created",
            success: true,
            order,
            url: data.data.authorization_url
        })
    } catch (error) {
        next(error)
    }
})

router.get('/get-orders', checkAuth, async(req, res, next) => {
  try {
    const orders = await Order.find()
    res.status(200).json({
      message: 'Orders found',
      data: orders
    })
  } catch (error) {
    next(error)
  }
})

router.get('/get-order/:orderId', checkAuth, async(req, res, next) => {
  try {
    const orderId = req.params.orderId
    const order = await Order.findById(orderId)
    if(!order) {
      const error =  new Error('Order not found')
      error.statusCode = 401
      throw error
    }

    res.status(200).json({
      message: 'Order found',
      data: order
    })
  } catch (error) {
    next(error)
  }
})

router.get('/get-user-orders/:userId', checkAuth, async(req, res, next) => {
  try {
    const userId = req.params.userId
    const orders = await Order.find({ sellerId: userId  })
    res.status(200).json({
      message: 'Orders found',
      data: orders
    })
  } catch (error) {
    next(error)
  }
})

router.get("/verify-order/:reference", checkAuth, async(req, res) => {
  try {
    const reference = req.params.reference

    const data = await verifyTx(reference)
    const order = await Order.findOne({ reference: reference })
    // console.log(data)
    order.status = data.data.status
    await order.save()
    res.status(200).json({
        order,
        success: true,
        message: data.data.gateway_response,
      })
  } catch (error) {
      return res.status(401).json({
          error,
          success: false,
          message: "Error confirming order",
      })
  }
})

module.exports = router