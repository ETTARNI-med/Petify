
const express = require("express")
const products = express.Router();

//products routes 

products
  .route("/products")
  .post("/", createNewProduct)
  .get("/", allProducts)
  .get('/', searchForProducts)
  .get('/:id', getProductsById)
  .patch('/:id',updateProducts)
  .delete('/:id',deleteProducts);
  
  module.exports = products;