require('dotenv').load()
require("babel-polyfill")
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import Product from './controllers/product'

var app = express();
var port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(cors())

app.use('/product', Product)

app.listen(port, function() {
  console.log('Starting node.js on port ' + port)
})
