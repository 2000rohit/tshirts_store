const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.use(express.json())

const productRouter = require('./routers/productRouter')
const db = require('./db')

app.use('/api', productRouter)

// heroku conform
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static('client/build'))
}

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port} `)
})
