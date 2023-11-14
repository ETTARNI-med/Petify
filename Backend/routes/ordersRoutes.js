const express = require("express");
const orders = express.Router();
const {
  createNewOrder,
  allOrders,
  getOrderById,
  updateOrder,
} = require("../controllers/ordersController");
//Orders routes

orders.post("/", createNewOrder)
.get("/", allOrders)
.get('/:id', getOrderById)
.put('/:id',updateOrder);

module.exports = orders;
