const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new Schema({
  sku: {
    type: String,
    require: true,
    unique: true,
  },
  product_image: {
    type: [String],
  },
  product_name: {
    type: String,
    require: true,
    unique: true,
    min: 3,
    max: 20,
  },
  subcategory_id: {
    type: String,
    require: true,
  },
  short_description: {
    type: String,
    require: true,
    max: 39,
  },
  long_description: {
    type: String,
    require: true,
    min: 25,
  },
  price: {
    type: String,
    require: true,
  },
  discount_price: {
    type: String,
    require: true,
  },
  options: {
    type: [String],
    default: [],
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
