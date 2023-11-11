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

// Users routes

users.post("/login", login);
users.post("/", registerUser);
users.get("/", getAllUsers);
users.get("/:id", getUserById);
users.get("/search", searchForUser);
users.put("/:id", updateUser);
users.delete("/:id", deleteUser);

module.exports = users;
