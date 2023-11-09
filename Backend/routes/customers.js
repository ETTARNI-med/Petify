const express = require("express")
const categories = express.Router();
const customersController = require('../controllers/customersController');
//categories routes 

categories
  .route("/customers")
  .post("/login", customersController.login)
  .post("/", customersController.register)
  .get('/', customersController.getAllCustomers)
  .get('/', customersController.searchForCustomer)
  .get('/:id', customersController.getCustomerById)
  .put('/validate/:id',customersController.validateCustomer)
  .put('/:id',customersController.updateCustomer)
  .delete('/delete',customersController.deleteCustomer)
  .get('/profile', customersController.getCustomerProfile)
  .patch('/profile/update', customersController.updateCustomerData);
  module.exports = categories;