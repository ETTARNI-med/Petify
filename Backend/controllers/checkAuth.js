//check register customer

const { generateToken } = require('../config/jwtToken');
const Customer = require('../models/CustomerSchema');

const asyncHandler=require('express-async-handler');

const registerCustomer = asyncHandler(
    async(req,res)=>{
        const email = req.body.email;
        const username = req.body.username;
    
        const findCustomer = await Customer.findOne({email})
        if (!findCustomer) {
          const newCustomer = await Customer.create(req.body)

          res.status(200).json(req.body);
    
        } else {
            throw new Error("User already exists")
       }
        
    }
)

//function Login

const login = asyncHandler( async (req,res)=>{
  const { email, password}=req.body;
         //check if user exist
  const findCustomer = await Customer.findOne({email});
  if(findCustomer&& await findCustomer.isPasswordMatched(password)) {
res.json({

  _id:findCustomer?._id,
  username:findCustomer?.username,
  lastname:findCustomer?.lastname,
  firstname:findCustomer?.firstname,
  email:findCustomer?.email,
  active:true,
token:generateToken(findCustomer?._id),
})
}else{
  throw new Error("Invalid Credentials")}
})

// Get all users

const allCustomers = asyncHandler(async (req, res) => {
  try {
    const getCustomers = await Customer.find();
    res.json(getCustomers);
  } catch (error) {
    throw new Error(error);
  }
});

//search for a customer
const searchCustomer = asyncHandler(async (req, res) => {
  const { query, sort } = req.query;

  try {
    // Find the customer based on the search query
    const customer = await Customer.find(query,sort);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json({
      customer,
    });
  } catch (error) {
    throw new Error(error);
  }
});


//search for a customer by id
const customerById = asyncHandler( async (req,res)=>{
const {id}=req.params;
try{

const getCustomer = await Customer.findById(id);
res.json({
  getCustomer,
});
} catch(error){
  throw new Error(error);
}
}
);
//delete a customer
const deleteCustomer = asyncHandler( async (req,res)=>{

  const Active = req.body.active;
  try{
    if(Active){

  const deletCustomer = await Customer.findById(req.body.id);
  res.json({
    deletCustomer,
  });}
  } catch(error){
    throw new Error(error);
  }
  }
  );

module.exports = {registerCustomer,login,allCustomers,customerById,deleteCustomer,searchCustomer};