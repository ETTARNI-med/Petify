
const express = require("express")
const categories = express.Router();

//categories routes 

categories
  .route("/categories")
  .post("/", createNewCategorie)
  .get("/", allCategories)
  .get('/', searchForCategories)
  .get('/:id', getCategorieById)
  .put('/:id',updateCategorie)
  .delete('/:id',deleteCategorie);
  
  module.exports = categories;