
const express = require("express")
const orders = express.Router();

//Orders routes 

orders
  .route("/orders")
  .post("/", createNewOrder)
  .get("/", allOrders)
  .get('/:id', getOrderById)
  .put('/:id',updateOrder)
  
  module.exports = orders;