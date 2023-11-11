const express = require("express");
const User = require("../models/Users");
const asyncHandler = require("express-async-handler");

//register function

const registerUser = asyncHandler(async (req, res) => {

});

//login controller
const login = (req, res) => {
  console.log("heey the login is working");
  res.send("heey loger");
};

//addNewUser controller

const addNewUser = () => {
  console.log(" hey the addNewUser is working");
};

//addNewUser getAllUsers

const getAllUsers = () => {
  console.log(" hey the getAllUsers is working");
};

//addNewUser getUserById

const getUserById = () => {
  console.log(" hey the getUserById is working");
};

//addNewUser searchForUser
const searchForUser = () => {
  console.log(" hey the searchForUser is working");
};

//addNewUser updateUser
const updateUser = () => {
  console.log(" hey the searchForUser is working");
};

//addNewUser deleteUser
const deleteUser = () => {
  console.log(" hey the deleteUser is working");
};

module.exports = {
  login,
  deleteUser,
  updateUser,
  searchForUser,
  getUserById,
  getAllUsers,
  registerUser,
};
