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
    const findId = find._id
    
    
    if ( !find){
        return res.status(400).json({
          msg: "Invalid credentials",
        })
       
      
    }
    
    const matched = await bcrypt.compare(password, find.password);
    
    if (matched){
      const token = await JWT.sign({
        //findRole: we will need the role to check if he has the right to login
        findRole, findId,
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

  try {


    const all = await User.find()

    res.status(200).json(all)
  } catch (error) {

    return  res.status(400).json({msg:"error"}) 
  }
  

};

//Get User By ID 

const getUserById = async(req,res) => {
 //console.log(req.params)
 //console.log(req.user)
 //const {token} = req.params;
 //const {id} = token.findId;
 //console.log(token)
 //console.log(id)

// ***** Get the User Id from the token (Check CheckIf) *******
 const hisID = await User.findById(req.userId)
 const infos = {
    fist_name : hisID.first_name,
    last_name : hisID.last_name,
    email : hisID.email,
    role : hisID.role,
    user_name : hisID.user_name,
  }

  try {
    res.status(200).json({infos})
  } catch (error) {
    return  res.status(400).json({
      "status": 403,
      "message": "you don't have enough privilege"}) 
  }
 
};

//Search For User  
const searchForUser = async(req, res) => {
  
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
