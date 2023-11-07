const express = require("express");
const mongoose = require('mongoose');

//***** REQUIRE CUSTOMER FROM CustomerSchema file *****
const customer = require('../models/CustomerSchema');

// (POST) CUSTOMER AUTHENTIFICATION
const login = (req,res)=>{}

// (POST) CREATE A NEW CUSTOMER ACCOUNT
// const register = async(req,res)=>{
 
// }

// GET ALL CUSTOMERS
const allCustomers = async(req,res)=>{}


//SEARCH FOR A CUSTOMER 
const searchCustomer = (req,res)=>{}

// GET A CUSTOMER BY ID 
const customerById= (req,res)=>{
     
}

// VADLIDATE THE COSTUMER'S ACCOUNT EMAIL ( OPTIONAL)
const customerValidation = (req,res)=>{}

//(PUT) UPDATE THE CUSTOMER'S DATA
const updateCustomer= async(req,res)=>{}

// DELETE THE  CUSTOMER'S ACCOUNT
const deleteCustomer= (req,res)=>{}

// GET THE CUSTOMER'S PROFIL
const customerProfil= (req,res)=>{}

// (PATCH) UPDATE THE CUSTOMERS DATA
const updateCustomersData =async (req,res)=>{}

module.exports = {login,
// register,
allCustomers,
searchCustomer,
customerById,
customerValidation,
updateCustomer,
deleteCustomer,
customerProfil,
updateCustomersData}