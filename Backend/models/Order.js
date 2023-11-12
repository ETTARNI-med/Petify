const mongoose =require( "mongoose");
const { Schema } = mongoose;
const OrderSchema = new mongoose.Schema(
  {
    _id: Schema.Types.UUID,
    customer_id: {
      type: String ,
      require: true,
    },
    order_items: {
      type: [],
      require: true,
    },
    order_date: {
      type: Date,
      require: true,
    },
    cart_total_price: {
      type: Schema.Types.Decimal128,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: false,
  }
);

const Order = mongoose.model("Orders", OrderSchema,"Order");

module.exports = Order;
