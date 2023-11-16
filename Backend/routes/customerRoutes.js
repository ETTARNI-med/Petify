const express = require('express')
const customerRoutes = express.Router();
//const { Router } = require('express')

const{ registerCustomer,login,customerById,deleteCustomer,searchCustomer} = require('../controllers/customersController')

// Customer authentication
customerRoutes.post("/login",login)

// *******Create a new customer account*******
customerRoutes.post("/", registerCustomer)

// Get all the customers list ==> ADMIN
// customerRoutes.get("/customers",allCustomers)

//Search for a customer ==> ADMIN
 customerRoutes.get("/",searchCustomer)
 
// Get a customer by ID ==> ADMIN
customerRoutes.get("/:id",customerById)

// Validate the customer's account or email (optional)

//customerRoutes.put("/v1/validate/:id",customerValidation)

// Update the customer's data ==> ADMIN

//customerRoutes.put("/v1/customer/id", updateCustomer)

// Delete the customer's account 

 customerRoutes.delete("/delete", deleteCustomer)

// Get the customer's profile

//customerRoutes.get("/v1/customer/profile", customerProfil)

// Update the customers data

//customerRoutes.patch("/v1/customer/profile/update", updateCustomersData)

module.exports = customerRoutes