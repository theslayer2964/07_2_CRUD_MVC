const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: String,
});

var products = mongoose.model("products", productSchema, "products");

module.exports = products;
