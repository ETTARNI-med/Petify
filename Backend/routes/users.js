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
} = require("../controllers/usersController");

const checkIfUser = require('../midllewares/checkUserAuth')
const checkIfAdmin = require('../midllewares/checkAdmin')
// Users routes

// LOGIN DONE
users.post("/login" ,login);
users.post("/add",checkIfAdmin,addUser);
users.get("/allusers",checkIfUser ,getAllUsers);
users.get("/profil/:id",checkIfUser ,getUserById);
users.get("/search", searchForUser);
users.put("/remo",checkIfAdmin ,updateUser);
users.delete("/delete",checkIfAdmin ,deleteUser);

module.exports = users;
