const express = require("express");
const users = express.Router();
const {
  login,
  deleteUser,
  updateUser,
  searchForUser,
  getUserById,
  getAllUsers,
  registerUser,
} = require("../controllers/usersController");

const checkIfUser = require('../midllewares/checkUserAuth')
// Users routes

users.post("/login" ,login);
users.post("/register", registerUser);
users.get("/users",checkIfUser ,getAllUsers);
users.get("/:id", getUserById);
users.get("/search", searchForUser);
users.put("/:id", updateUser);
users.delete("/:id", deleteUser);

module.exports = users;
