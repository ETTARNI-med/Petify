const express = require("express");
const products = express.Router();
const {
  createNewProduct,
  
  searchForProducts,
  getProductsById,
  updateProducts,
  deleteProduct,
} = require("../controllers/productsController");

const upload = require('../midllewares/multerMiddleware');

//products routes

products.post("/addproduct",upload.single('image'),createNewProduct);

products.get("/",searchForProducts);
products.get("/:id", getProductsById);
products.patch("/:id", updateProducts);
products.delete("/:id", deleteProduct);

module.exports = products;
