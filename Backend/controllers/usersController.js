const express = require("express");
const User = require("../models/Users");
const asyncHandler = require("express-async-handler");
const JWT = require ('jsonwebtoken')
const bcrypt = require("bcrypt");
const users = require("../routes/users");
const { set } = require("mongoose");
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
        findId,
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
  let {query} = req.query;

  if (typeof query === "undefined"){
    try {
      const getUsers = await User.find();

      res.json(getUsers);
    } catch (error) {
      throw new Error(error);
    }
  } else {
    try {
      query = query.toLocaleLowerCase();

      const regex = new RegExp(query,"i");
      // Find the user based on the search query /

      const userInfo = await User.find({
       $or : [
          {first_name : {$regex : regex}},
          {last_name : {$regex : regex}},
          {email : {$regex : regex}},
          {role : {$regex : regex}},
       ],
      });

      if (!userInfo) {
        return res.status(404).json({ message: "Customer not found" });
      }

      res.json({
        userInfo,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

};

//Update User updateUser
const updateUser = async (req, res) => {
  //const {id} = req.params.id;
  let query = req.query
  let queryId = query._id
  //const {modifiedInfos} = req.body;
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const  email = req.body.email;
  const userName = req.body.user_name;
  const password = req.body.password;

   const findUser = await User.findOne({queryId})
  // console.log(findUser)
  try {
    if(password){
      const salt = await bcrypt.genSalt(saltRounds)
    const hashedNewPassword = await bcrypt.hash(password, salt )

    const isModified = await User.updateOne(
      {_id : findUser._id}, {
        $set: {
          first_name : firstName,
          last_name : lastName,
          email : email,
          user_name : userName,
          password : hashedNewPassword
        }
      }
      )
    } else {
      const isModified = await User.updateOne(
        {_id : findUser._id}, {
          $set: {
            first_name : firstName,
            last_name : lastName,
            email : email,
            user_name : userName,
            
          }
        }
        )
    }
    

    

      res.status(200).json({
        msg: "updated successfully",
       
      })
  } catch (error) {
    throw new Error(error)
  }
};

//Delete User  
const deleteUser = async(req, res) => {
  let query = req.query;
  
  let queryId = query._id
  const userWillBeDeleted = await User.findOne({queryId})

  
  if(!userWillBeDeleted){
    return res.status(404).json({
      
        "status": 404,
        "message": "invalid user id"
      
    })
  }

  try {
    await User.deleteOne({_id : userWillBeDeleted._id})
    res.status(200).json({
        "status": 200,
        "message": "user deleted successfully"
    })
  } catch (error) {
    throw new Error(error);
  }
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
