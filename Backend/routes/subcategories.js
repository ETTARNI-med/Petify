const express = require("express");
const subcategories = express.Router();
const {
  createNewSubcategory,
  allSubcategories,
  // searchForSubcategories,
  getSubcategorieById,
  updateSubcategory,
  deleteSubcategory,
} = require("../controllers/subcategoriesController");
//subcategories routes

subcategories
  .post("/", createNewSubcategory)
  .get("/", allSubcategories)
  // .get("/", searchForSubcategories)
  .get("/:id", getSubcategorieById)
  .put("/:id", updateSubcategory)
  .delete("/:id", deleteSubcategory);

module.exports = subcategories;
