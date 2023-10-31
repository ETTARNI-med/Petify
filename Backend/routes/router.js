
const express = require("express")
const router = express.Router();

import users from './users';
import customers from './customers'
import categories from './categories'
import subcategories from './subcategories'
import products from './products'
import orders from './orders'


router.route('/')
.use('/users', users)
.use('/customers', customers)
.use('/categories', categories)
.use('/subcategories', subcategories)
.use('/products', products)
.use('/orders', orders);

module.exports = router;