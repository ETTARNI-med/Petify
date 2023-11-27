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

      // To Return New User without Password
      const user = newUser.toObject()
      delete user.password 
       
       res.status(200).json({
        msg: "Succesfully added",
        user
        
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
  //const user_name = req.body.user_name;
  const password = req.body.password;

  try { 

    const find = await User.findOne({$or : [{user_name : email},{email}]})
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
    //create_date : hisID.creation_date,
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
// const searchForUser = async(req, res) => {
//   let {query} = req.query;

//   if (typeof query === "undefined"){
//     try {
//       const getUsers = await User.find();

//       res.json(getUsers);
//     } catch (error) {
//       throw new Error(error);
//     }
//   } else {
//     try {
//       query = query.toLocaleLowerCase();

//       const regex = new RegExp(query,"i");
//       // Find the user based on the search query /

//       let userInfo = await User.find({
//        $or : [
//           {first_name : {$regex : regex}},
//           {last_name : {$regex : regex}},
//           {email : {$regex : regex}},
//           {role : {$regex : regex}},
//        ],
//       });
//       const infos = {
//         fist_name : userInfo.first_name,
//         last_name : userInfo.last_name,
//         email : userInfo.email,
//         role : userInfo.role,
//         user_name : userInfo.user_name,
//         //create_date : hisID.creation_date,
//       }
//       if (!userInfo) {
//         return res.status(404).json({ message: "Customer not found" });
//       }
//        // To Return New User without Password
//       //  const user = {...userInfo}
//        //delete userInfo.password 
       
      
//       res.json({
//         infos,
//       });
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

// };


const searchForUser = async (req, res) => {
  try {
    let { query } = req.query;

    if (typeof query === "undefined") {
      const getUsers = await User.find();

      res.json(getUsers.map((user) => formatUser(user)));
    } else {
      query = query.toLowerCase();
      const regex = new RegExp(query, "i");

      // Find the user based on the search query
      let userInfo = await User.find({
        $or: [
          { first_name: { $regex: regex } },
          { last_name: { $regex: regex } },
          { email: { $regex: regex } },
          { role: { $regex: regex } },
        ],
      });

      if (!userInfo || userInfo.length === 0) {
        return res.status(404).json({ message: "Customer not found" });
      }

      const formattedUserInfo = userInfo.map((user) => formatUser(user));

      res.json({
        userInfo: formattedUserInfo,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// Helper function to format user information without the password
const formatUser = (user) => {
  const { first_name, last_name, email, role, user_name, creation_date } = user;

  return {
    first_name,
    last_name,
    email,
    role,
    user_name,
    creation_date,
  };

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
