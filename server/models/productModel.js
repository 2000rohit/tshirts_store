const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    title: { type: 'string' },
    price: { type: 'number' },
    description: { type: 'string' },
    category: { type: 'string' },
    image: { type: 'string' },
    rating: {},
  },
  {
    timestamps: true,
  }
)

const productModel = mongoose.model('products', productSchema)

module.exports = productModel
