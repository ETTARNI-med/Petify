const express = require("express");
const customerRoutes = express.Router();
const checkCustomer = require("../midllewares/checkCustomer");
const checkUserAuth = require("../midllewares/checkUserAuth");
const checkauthCustomer = require("../midllewares/checkauthCustomer");
const checkToken = require("../midllewares/checkToken");
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
  resetPassword,
  logout,
} = require("../controllers/customersController");

// Customer authentication
customerRoutes.post("/login", login);

// *******Create a new customer account*******
customerRoutes.post("/", registerCustomer);

//Search for a customer ==> ADMIN
customerRoutes.get("/search", searchCustomer);

// Get a customer by ID ==> ADMIN
customerRoutes.get("/all/:id", customerById);

// Validate the customer's account or email (optional)

customerRoutes.put("/validate", customerValidation);

// Update the customer's data ==> ADMIN

customerRoutes.put("/:id", updateCustomer);

// Delete the customer's account

customerRoutes.delete("/:id", deleteCustomer);

// Get the customer's profile

customerRoutes.get("/profile", customerProfil);

// Update the customers data

customerRoutes.patch("/profile/update", updateCustomersData);
//forget password
customerRoutes.post("/forgotPassword", forgotPassword);

//reset password
customerRoutes.patch("/resetPassword/:token", checkToken, resetPassword);

//logout
customerRoutes.get("/logout", logout);

module.exports = customerRoutes;
