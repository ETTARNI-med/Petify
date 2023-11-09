const express = require('express')
const customerRoutes = express.Router();
//const { Router } = require('express')
const {
    
    
   
    customerValidation,
    updateCustomer,
    customerProfil,
    updateCustomersData}= require('../controllers/customerControllers')

const{allCustomers, registerCustomer,login,customerById,deleteCustomer,searchCustomer} = require('../controllers/checkAuth')

// Customer authentication
customerRoutes.post("/customers/login",login)

// *******Create a new customer account*******
customerRoutes.post("/customers", registerCustomer)

// Get all the customers list ==> ADMIN
// customerRoutes.get("/customers",allCustomers)


//Search for a customer ==> ADMIN
 customerRoutes.get("/customers",searchCustomer)
 
// Get a customer by ID ==> ADMIN
customerRoutes.get("/customers/:id",customerById)

// Validate the customer's account or email (optional)

customerRoutes.put("/v1/validate/:id",customerValidation)

// Update the customer's data ==> ADMIN

customerRoutes.put("/v1/customer/id", updateCustomer)

// Delete the customer's account 

customerRoutes.delete("/v1/customers/delete", deleteCustomer)

// Get the customer's profile

customerRoutes.get("/v1/customer/profile", customerProfil)

// Update the customers data

customerRoutes.patch("/v1/customer/profile/update", updateCustomersData)

module.exports = customerRoutes