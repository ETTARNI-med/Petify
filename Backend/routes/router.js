
const express = require("express")
const router = express();
const customerRoutes = require('./customerRoutes')
const users = require('./users');

const categories =require ('./categories');
// import subcategories from './subcategories'
const  products = require('./products') ;
// import orders from './orders'



  router.use('/users', users);
  router.use('/customers', customerRoutes);
 router.use('/categories', categories);
//  router.use('/subcategories', subcategories);
 router.use('/products', products);
//  router.use('/orders', orders);

module.exports = router;