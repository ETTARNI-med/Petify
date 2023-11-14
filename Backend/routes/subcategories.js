const express = require("express");
const subcategories = express.Router();
const {
  createNewSubcategorie,
  allSubcategories,
  // searchForSubcategories,
  getSubcategorieById,
  updateSubcategorie,
  deleteSubcategorie,
} = require("../controllers/subcategoriesController");
//subcategories routes

subcategories
  .post("/", createNewSubcategorie)
  .get("/", allSubcategories)
  // .get("/", searchForSubcategories)
  .get("/:id", getSubcategorieById)
  .put("/:id", updateSubcategorie)
  .delete("/:id", deleteSubcategorie)
  ;

module.exports = subcategories;
