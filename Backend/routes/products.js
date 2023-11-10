const express = require("express");
const products = express.Router();
const {
  createNewProduct,
  allProducts
  // searchForProducts,
  // getProductsById,
  // updateProducts,
  // deleteProducts,
} = require("../controllers/productsController");
//products routes

products.post("/", createNewProduct);
products.get("/", allProducts);
  // .get("/", searchForProducts)
  // .get("/:id", getProductsById)
  // .patch("/:id", updateProducts)
  // .delete("/:id", deleteProducts);

module.exports = products;
