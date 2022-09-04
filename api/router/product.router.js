const express = require("express");
var Router = express.Router();
var productAPI = require("../../api/controller/product.controller");
Router.get("/", productAPI.listProduct);
Router.post("/", productAPI.postProduct);

module.exports = Router;
