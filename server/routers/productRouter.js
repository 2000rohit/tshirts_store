const express = require('express')
const router = express.Router()

const Products = require('../models/productModel')

router.get('/product', async (req, res) => {
  try {
    const products = await Products.find({})
    res.send(products)
  } catch (err) {
    return res.status(400).json({ message: err })
  }
})

module.exports = router
