//check register customer

const Customer = require("../models/CustomerSchema");
const asyncHandler = require("express-async-handler");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const uuid = require("uuid");
const sendEmail = require("../config/sendEmail");

//register a customer
const registerCustomer = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const code = uuid.v4().substr(0, 4);
  console.log("generated code:" + code);
  const username = req.body.username;

  const findCustomer = await Customer.findOne({ email });
  if (!findCustomer) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const hashedCode = await bcrypt.hash(code, salt);

    const newCustomer = await Customer.create({
      ...req.body,
      password: hashedPassword,
    });

    const findCustomer = await Customer.findOne({ email });
    const findId = findCustomer.id;

    const token = await JWT.sign(
      {
        findId,
        hashedCode,
      },
      JWT_SECRET,
      {
        expiresIn: 800,
      }
    );

    res.cookie("token", token, { maxAge: 800000, httpOnly: true });
    sendEmail(email, code);

    res.json({ token: token });
    // res.redirect(`http://127.0.0.1:4000/v1/customers/validate`);
  } else {
    throw new Error("User already exists");
  }
});

//function Login

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exist
  const findCustomer = await Customer.findOne({ email });

  const findId = findCustomer._id;

  try {
    const matched = await bcrypt.compare(password, findCustomer.password);

    req.session.customer = findCustomer;
    await req.session.save;
    if (matched) {
      const token = await JWT.sign(
        {
          findId,
        },
        JWT_SECRET,
        {
          expiresIn: 1800,
        }
      );
      //  session({
      //   secret:JWT_SECRET,
      //   resave:false,
      //   saveUnintialized:false,
      // })
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
      });
      res.status(200).json({
        token,
      });
    } else {
      return res.status(501).json({
        msg: "Check email or Password",
      });
    }
  } catch (error) {
    // throw new Error("error");
    return res.status(400).json({ msg: "error" });
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
  try {
    const findById = await Customer.findOne({ _id: req.id });
    if (findById) {
      const deletCustomer = await Customer.findByIdAndDelete({ _id: req.id });
      res.status(201).json("Data successfuly deleted");
      //res.clearCookie('jwtToken');
    }
  } catch (error) {
    throw new Error(error);
  }
});

//update Customer by id : allowed only by Users
const updateCustomer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  const findCustomer = await Customer.findOne({ _id: id });
  const findByEmail = await Customer.findOne({ email: email });
  try {
    if (
      findCustomer.email === email ||
      (findCustomer.email !== email && !findByEmail)
    ) {
      const updateCustomer = await Customer.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      res.status(200).json("customer updated successfully");
    } else if (!findCustomer) {
      res.status(404).json("invalid customer id");
    } else if (findByEmail) {
      res.json("Email is already existed ");
    }
  } catch (error) {
    throw new Error(error);
  }
});

//update Customers Data by Customers by decoding the token

const updateCustomersData = asyncHandler(async (req, res) => {
  try {
    const email = req.body.email;
    const findCustomer = await Customer.findOne({ _id: req.id });
    const findByEmail = await Customer.findOne({ email: email });
    if (
      findCustomer.email === email ||
      (findCustomer.email !== email && !findByEmail)
    ) {
      const updateCustomer = await Customer.findByIdAndUpdate(
        { _id: req.id },
        req.body,
        { new: true }
      );
      res.status(200).json("customer updated successfully");
    } else if (!findCustomer) {
      res.status(404).json("invalid customer id");
    } else if (findByEmail) {
      res.json("Email is already existed ");
    }
  } catch (error) {
    res.json("error or token is not valid");
  }
});

// get the customer Profil
const customerProfil = asyncHandler(async (req, res) => {
  try {
    console.log("req.session.customer: ", req.session.customer);

    const findById = await Customer.findOne({ _id: req.id });
    if (findById) {
      res.status(200).json({
        first_name: findById.first_name,
        first_last: findById.last_name,
        username: findById.username,
        email: findById.email,
      });
    } else {
      res.status(403).json("you don't have enough privilege");
    }
  } catch (error) {
    throw new Error(error);
  }
});

//customer Validation
const customerValidation = asyncHandler(async (req, res) => {
  const enteredCode = req.body.code;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedEnteredCode = await bcrypt.hash(enteredCode, salt);

  const isCodeValid = await bcrypt.compare(enteredCode, req.hashedCode);

  try {
    const findById = await Customer.findOne({ _id: req.id });
    const findId = findById._id;
    const customerValid = findById.valid_account;

    if (findById && isCodeValid && customerValid == false) {
      //update the valid_account situation
      const setToValid = await Customer.findByIdAndUpdate(
        req.id,
        { valid_account: true },
        { new: true }
      );
      //update the token
      const token = await JWT.sign(
        {
          findId,
        },
        JWT_SECRET,
        {
          expiresIn: 800,
        }
      );
      //update the cookies
      const newCookie = await res.cookie("token", token, { httpOnly: true });

      res.status(200).json({
        status: 400,
        message:
          "congratulations . you have validate your account successfully ",
      });
      req.session.customer = findById;
      await req.session.save;
    } else if (customerValid) {
      res.status(400).json({
        status: 400,
        message: "invalid action, this email is already validated",
      });
    } else if (hashedEnteredCode != req.hashedCode) {
      res.status(200).json({
        status: 401,
        message: "the entered code is not valid",
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "invalid customer id",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  registerCustomer,
  login,
  customerById,
  deleteCustomer,
  searchCustomer,
  updateCustomersData,
  updateCustomer,
  customerProfil,
  customerValidation,
};
