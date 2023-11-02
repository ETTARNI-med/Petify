
const express = require("express")
const users = express.Router();

//users routes
users
  .route("/users")
  .post("/login", login)
  .post("/", addNewUser)
  .get('/', getAllUsers)
  .get('/:id', getUserById)
  .get('/',searchForUser)
  .put('/:id',updateUser)
  .delete('/:id',deleteUser);
  
  module.exports = users;