const express = require("express");
const User = require("../models/Users");
const asyncHandler = require("express-async-handler");
const JWT = require ('jsonwebtoken')
const bcrypt = require("bcrypt");
const users = require("../routes/users");
const JWT_SECRET = process.env.JWT_SECRET

const saltRounds = 10;

const addUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const user_name = req.body.user_name
  const password = req.body.password;
  
  // Check if email and username if they are already exist
    const findUser = await User.findOne({ email });
    const findUsername = await User.findOne({user_name});
    
    try{
      // If not 
    if ((!findUser) && (!findUsername) ) {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      })
      
       res.status(200).json({
        msg: "Succesfully added",
        newUser
        
      });
    }
  else{
    res.status(401).json("this user is unauthorized or already existed")
  } }
    
  catch(error) {
    throw new Error("error");
  }
});

//Login Controller
const login = async (req, res) => {

  const email = req.body.email;
  const user_name = req.body.user_name;
  const password = req.body.password;

  try { 

    const find = await User.findOne({$or : [{user_name},{email}]})
    const findRole = find.role
    
    
    if ( !find){
        return res.status(400).json({
          msg: "Invalid credentials",
        })
       
      
    }
    
    const matched = await bcrypt.compare(password, find.password);
    
    if (matched){
      const token = await JWT.sign({
        //findRole: we will need the role to check if he has the right to login
        findRole,
        },JWT_SECRET, {
          expiresIn: 1800 
        })
     res.status(200).json({

        token
      })
    } else {
       return res.status(501).json({
        msg: "Check email or Password"
      })
    }
   
  } catch (error) {
    // throw new Error("error");
    return  res.status(400).json({msg:"error"}) 
  }
};

//Add New User controller // Check addUser above

// const addNewUser = () => {
//   console.log(" hey the addNewUser is working");
// };

//Get All Users 

const getAllUsers = async (req,res) => {
  
  const all = await User.find()

  res.status(200).json(all)

};

//Get User By ID 

const getUserById = () => {
  console.log(" hey the getUserById is working")
  
};

//Search For User  
const searchForUser = () => {
  console.log(" hey the searchForUser is working");
};

//Update User updateUser
const updateUser = () => {
  console.log(" hey the searchForUser is working");
};

//Delete User  
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
  addUser,
};
