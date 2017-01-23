
// Dependencies
var express = require('express');
var router = express.Router();

//Product
var Product = require('../models/product.js');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

// Return router
module.exports = router;
