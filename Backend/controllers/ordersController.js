const Order = require("../models/Order");
const asyncHandler = require("express-async-handler");
//const Customer = require('../models/CustomerSchema');

//creat an order

const createNewOrder = asyncHandler(async (req, res) => {
  const customer = req.body.customer_id;

  try {
    if (customer) {
      const Orders = await Order.create(req.body);
      res.json("order successfully created");
    } else {
      res.json("you are not authenticated as a customer");
    }
  } catch (error) {
    throw new Error(error);
  }
});

// create a function to get all orders

const allOrders = asyncHandler(async (req, res) => {
  try {
    const getAllOrders = await Order.find();
    res.json(getAllOrders);
  } catch (error) {
    throw new Error(error);
  }
});

//function to get Order By Id
const getOrderById = asyncHandler(async (req, res) => {
  const orderId = req.params.id;
  try {
    if (orderId) {
      const GetOrder = await Order.findById({ _id: orderId });
      res.json(GetOrder);
    } else {
      res.json("the order ID does not exist");
    }
  } catch (error) {
    throw new Error(error);
  }
});

//function to  update Order
const updateOrder = asyncHandler(async (req, res) => {
  const orderId = req.params.id;
  const findId = await Order.findById(orderId);
  try {
    if (findId) {
      const updateOrder = await Order.findByIdAndUpdate(
        { _id: orderId },
        req.body,
        {
          new: true,
        }
      );
      res.json(updateOrder);
    } else {
      res.status(401).json("the order ID does not exist");
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createNewOrder, allOrders, getOrderById, updateOrder };
