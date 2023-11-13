const express = require("express");
const categories = express.Router();
const {
  createNewCategorie,
  
  searchForCategories,
  getCategorieById,
  updateCategorie,
  deleteCategorie,
} = require("../controllers/categoriesController");

//categories routes

categories.post("/", createNewCategorie)

 .get('/', searchForCategories)
.get('/:id', getCategorieById)
.put('/:id',updateCategorie)
.delete('/:id',deleteCategorie);

module.exports = categories;
