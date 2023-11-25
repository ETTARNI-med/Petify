const express = require("express");
const customerRoutes = express.Router();
const checkCustomer = require("../midllewares/checkCustomer");
const checkUserAuth = require("../midllewares/checkUserAuth");
const checkauthCustomer = require("../midllewares/checkauthCustomer");
const checkToken = require('../midllewares/checkToken')
const {
  registerCustomer,
  login,
  customerById,
  deleteCustomer,
  searchCustomer,
  updateCustomersData,
  updateCustomer,
  customerProfil,
  customerValidation,
  forgotPassword,
  resetPassword
} = require("../controllers/customersController");

// Customer authentication
customerRoutes.post("/login", login);

// *******Create a new customer account*******
customerRoutes.post("/", registerCustomer);

//Search for a customer ==> ADMIN
customerRoutes.get("/search", checkUserAuth, searchCustomer);

// Get a customer by ID ==> ADMIN
customerRoutes.get("/all/:id", checkUserAuth, customerById);

// Validate the customer's account or email (optional)

customerRoutes.put("/validate", checkauthCustomer, customerValidation);

// Update the customer's data ==> ADMIN

customerRoutes.put("/:id", checkUserAuth, updateCustomer);

// Delete the customer's account

customerRoutes.delete("/delete", checkCustomer, deleteCustomer);

// Get the customer's profile

customerRoutes.get("/profile", checkCustomer, customerProfil);

// Update the customers data

customerRoutes.patch("/profile/update", checkCustomer, updateCustomersData);
//forget password
customerRoutes.post("/forgotPassword", forgotPassword);
//reset password

customerRoutes.patch("/resetPassword/:token", checkToken,resetPassword);

module.exports = customerRoutes;
