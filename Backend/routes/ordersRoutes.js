
const express = require("express")
const orders = express.Router();
const {createNewOrder,allOrders,getOrderById,updateOrder} = require('../controllers/ordersController');
//Orders routes 

orders
  .post("/orders", createNewOrder)
  .get("/orders", allOrders)
  .get('/orders:id', getOrderById)
  .put('/orders:id',updateOrder)
  
  module.exports = orders;