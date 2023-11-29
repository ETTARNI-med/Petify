const express = require("express");
const User = require("../models/Users");
const asyncHandler = require("express-async-handler");
const JWT = require ('jsonwebtoken')
const bcrypt = require("bcrypt");
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
    res.cookie("token", token, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000,
        });
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

const {id}=req.params;
// ***** Get the User Id from the token (Check CheckIf) *******
 const hisID = await User.findById({_id:id})
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
  
  const {id} = req.params;
  const  email = req.body.email;
  const username = req.body.user_name;
  const password =req.body.password;
  
   const findUserById = await User.findOne({_id:id})
   const findUserByEmail = await User.findOne({email:email});
   const findUserByUsername= await User.findOne({user_name:username})

 try { 

if(findUserById.user_name !== username && findUserByUsername){
  res.json('username already exist');
} else if(findUserById.email !== email && findUserByEmail){
  res.json('email already existed');
}
else{
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  await User.findByIdAndUpdate(
    { _id: id },
        { ...req.body, password: hashedPassword },
        { new: true }
  )
res.json('successfully updated');
}

} catch (error) {
  console.log(error)
  }
};

//Delete User  
const deleteUser = async(req, res) => {

 const {id}=req.params; 
 
  const userWillBeDeleted = await User.findOne({_id:id})

  try {
    if(!userWillBeDeleted){
      return res.status(404).json({
        
          "status": 404,
          "message": "invalid user id"
        
      })
    }
    else{
    await User.deleteOne({_id :id})
    res.status(200).json({
        "status": 200,
        "message": "user deleted successfully"
    })}

  } catch (error) {
    throw new Error(error);
  }
};

//logout function
const logout= asyncHandler(async(req,res)=>{
  res.clearCookie("token", { httpOnly: true, secure: true });
  await User.findByIdAndUpdate(
    { _id:req.userId },
    {active:false},
    { new: true }
  );
  res.json("successfully loged out")
})

//get the user profile 
const profile = async(req,res)=>{
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
}
 


module.exports = {
  login,
  deleteUser,
  updateUser,
  searchForUser,
  getUserById,
  getAllUsers,
  addUser,
  logout,
  profile

};
