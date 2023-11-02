
const express = require("express")
const subcategories = express.Router();

//subcategories routes 

subcategories
  .route("/subcategories")
  .post("/", createNewSubcategorie)
  .get("/", allSubcategories)
  .get('/', searchForSubcategories)
  .get('/:id', getSubcategorieById)
  .put('/:id',updateSubcategorie)
  .delete('/:id',deleteSubcategorie);
  
  module.exports = subcategories;