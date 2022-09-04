var express = require("express");
var Router = express.Router();
var controller = require("../controller/AuthController");

Router.get("/login", controller.login);
Router.post("/login", controller.postLogin);

module.exports = Router;
