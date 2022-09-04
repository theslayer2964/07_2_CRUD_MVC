const ProductModel = require("../../models/products.model");

module.exports.listProduct = async (req, res) => {
  var products = await ProductModel.find();
  res.json(products);
};
module.exports.postProduct = async (req, res) => {
  var product = await ProductModel.create(req.body);
  res.json(product);
};
