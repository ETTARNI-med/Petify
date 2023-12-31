const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema(
  {
    customer_id: {
      type: String,
      required: true,
    },
    order_items: {
      type: [],
      required: true,
    },
    order_date: {
      type: Date,
      default: Date.now,
    },
    cart_total_price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
