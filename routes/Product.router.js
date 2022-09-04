var express = require("express");
var Router = express.Router();
var productController = require("../controller/ProductController");

Router.get("/", productController.listProduct);

// Router.get("/", productController.listProductPaging);
// chua xong!!!!

module.exports = Router;
