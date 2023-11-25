const express = require("express");
const products = express.Router();
const {
  createNewProduct,
  
  searchForProducts,
  getProductsById,
  updateProducts,
  deleteProduct,
} = require("../controllers/productsController");
//products routes

products.post("/", createNewProduct);

products.get("/", searchForProducts);
products.get("/:id", getProductsById);
products.patch("/:id", updateProducts);
products.delete("/:id", deleteProduct);

module.exports = products;
