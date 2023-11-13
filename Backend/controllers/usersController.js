const express = require("express");
const User = require("../models/Users");
const asyncHandler = require("express-async-handler");
const JWT = require ('jsonwebtoken')
const bcrypt = require("bcrypt");

const saltRounds = 10;

const registerUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const user_name = req.body.user_name
  const password = req.body.password;

 
    const findUser = await User.findOne({ email });
    const findUsername = await User.findOne({user_name});
    try{
    if ((!findUser) && (!findUsername) ) {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      });

      res.status(200).json({
        msg: "Succesfully added",
      });
    }
  else{
    res.status(401).json("this user is unauthorized or already existed")
  } }
    
  catch(error) {
    throw new Error("error");
  }
});

//login controller
const login = async (req, res) => {
  // console.log("heey the login is working");
  // res.send("heey loger");

  const email = req.body.email;
  const user_name = req.body.user_name;
  const password = req.body.password;

  try {

    const findEmail = await User.findOne({email})
    const findUsername = await User.findOne({user_name})

    if (!findEmail && !findUsername){
      res.status(501).json({
        msg: "Invalid credentials",
      })
    }
    
    const matched = await bcrypt.compare(password, findEmail.password);
    
    if (matched){
      res.status(200).json({
        msg: " Welcome"
      })
    } else {
      res.status(501).json({
        msg: "Check email or Password"
      })
    }
   
  } catch (error) {
    throw new Error("error");
  }
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
