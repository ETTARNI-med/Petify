//check register customer

const { generateToken } = require("../config/jwtToken");
const Customer = require("../models/CustomerSchema");

const asyncHandler = require("express-async-handler");

const bcrypt = require("bcrypt");
const saltRounds = 10;


const registerCustomer = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const username = req.body.username;

  const findCustomer = await Customer.findOne({ email });
  if (!findCustomer) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    //console.log(req.body,hashedPassword)
    const newCustomer = await Customer.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(200).json({
      email,
      username,
      msg: "successfully Registred",
    });
  } else {
    throw new Error("User already exists");
  }
});

//function Login

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exist
  const findCustomer = await Customer.findOne({ email });
  if (findCustomer && (await findCustomer.isPasswordMatched(password))) {
    res.json({
      _id: findCustomer?._id,
      username: findCustomer?.username,
      lastname: findCustomer?.lastname,
      firstname: findCustomer?.firstname,
      email: findCustomer?.email,
      active: true,
      token: generateToken(findCustomer?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// Get all users

//search for a customer
const searchCustomer = asyncHandler(async (req, res) => {
  let { query } = req.query;

  if (typeof query === "undefined") {
    try {
      const getCustomers = await Customer.find();
      res.json(getCustomers);
    } catch (error) {
      throw new Error(error);
    }
  } else {
    try {
      query = query.toLocaleLowerCase();
      const regex = new RegExp(query, "i");
      // Find the customer based on the search query /
      const customer = await Customer.find({
        $or: [
          { first_name: { $regex: regex } },
          { last_name: { $regex: regex } },
          { email: { $regex: regex } },
        ],
      });

      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }

      res.json({
        customer,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
});

//search for a customer by id
const customerById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getCustomer = await Customer.findById(id);
    res.json({
      getCustomer,
    });
  } catch (error) {
    throw new Error(error);
  }
});
//delete a customer
const deleteCustomer = asyncHandler(async (req, res) => {
  const Active = req.body.active;
  try {
    if (Active) {
      const deletCustomer = await Customer.findById(req.body.id);
      res.json({
        deletCustomer,
      });
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  registerCustomer,
  login,
  customerById,
  deleteCustomer,
  searchCustomer,
};
