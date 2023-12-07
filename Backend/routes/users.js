const express = require("express");
const users = express.Router();
const {
  login,
  deleteUser,
  updateUser,
  searchForUser,
  getUserById,
  getAllUsers,
  addUser,
  logout,
  profile
} = require("../controllers/usersController");

const checkIfUser = require('../midllewares/checkUserAuth')
const checkIfAdmin = require('../midllewares/checkAdmin')
// Users routes

// LOGIN DONE
users.post("/login" ,login);
users.post("/add",addUser);
users.get("/allusers" ,getAllUsers);
users.get("/profil/:id" ,getUserById);
users.get("/search", searchForUser);
users.put("/:id", updateUser);
users.delete("/:id", deleteUser);
users.get("/logout",logout);
users.get("/profile",profile);

module.exports = users;
