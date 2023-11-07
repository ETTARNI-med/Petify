const router = require('express').Router();
//const { Router } = require('express')
const {login,
    
    allCustomers,
    searchCustomer,
    customerById,
    customerValidation,
    updateCustomer,
    deleteCustomer,
    customerProfil,
    updateCustomersData}= require('../controllers/customerControllers')

const registerCustomer = require('../controllers/checkAuth')

// Customer authentication
router.post("/v1/customers",login)

// *******Create a new customer account*******
router.post("/v1/customers/register", registerCustomer)

// Get all the customers list ==> ADMIN
router.get("/v1/customers",allCustomers)


//Search for a customer ==> ADMIN
 router.get("/v1/customer",searchCustomer)
 
// Get a customer by ID ==> ADMIN
router.get("/v1/customer/:id",customerById)

// Validate the customer's account or email (optional)

router.put("/v1/validate/:id",customerValidation)

// Update the customer's data ==> ADMIN

router.put("/v1/customer/id", updateCustomer)

// Delete the customer's account 

router.delete("/v1/customers/delete", deleteCustomer)

// Get the customer's profile

router.get("/v1/customer/profile", customerProfil)

// Update the customers data

router.patch("/v1/customer/profile/update", updateCustomersData)

module.exports = router