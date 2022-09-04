const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  avatar: String,
  phone: String,
});

var users = mongoose.model("users", userSchema, "users");
module.exports = users;
