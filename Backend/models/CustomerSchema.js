const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
// Declare the schema of the customer
const CustomerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
    },
    first_name: {
      type: String,
      require: true,
      min: 2,
      max: 27,
    },
    last_name: {
      type: String,
      require: true,
      min: 2,
      max: 27,
    },
    customer_image: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      min: 11,
      max: 60,
    },

    password: {
      type: String,
      require: true,
      min: 8,
    },

    lastLogin: {
      type: Date,
      default: Date.now,
    },

    valid_account: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createAt: "creation_date",
      updateAt: "last_login",
    },
  }
);

const Customer = mongoose.model("Customers", CustomerSchema, "Customer");

module.exports = Customer;
