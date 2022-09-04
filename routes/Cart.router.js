const express = require("express");
const Router = express.Router();
const cartController = require("../controller/CartController");

Router.get("/addToCart/:productId", cartController.addToCart);

module.exports = Router;
