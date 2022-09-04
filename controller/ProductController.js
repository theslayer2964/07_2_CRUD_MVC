// Local db:
// var db = require("../db");
// module.exports.listProductPaging = function (req, res) {
//   var page = parseInt(req.query.page) || 1;
//   var soLuongSP1LanLoad = 3;
//   var begin = (page - 1) * soLuongSP1LanLoad;
//   var end = page * soLuongSP1LanLoad;
//   var tongSoSP = db.get("products").value().length;
//   var soLuongPhanTrang = tongSoSP / soLuongSP1LanLoad;
//   if (tongSoSP % soLuongSP1LanLoad != 0) soLuongPhanTrang++;
//   var soLuongPhanTrang = res.render("products/listProduct", {
//     //products: db.get("products").value().slice(begin, end), // c1
//     products: db.get("products").drop(begin).take(soLuongSP1LanLoad).value(), // c2: function cua lowdb support
//     page: soLuongPhanTrang,
//   });
// };
// module.exports.listProduct = function (req, res) {
//   res.render("products/listProduct", {
//     products: db.get("products").value(),
//     page: 10,
//   });
// };
const ProductModel = require("../models/products.model");
// c1: promise
// module.exports.listProduct = (req, res) => {
//   ProductModel.find().then((products) => {
//     res.render("products/listProduct", {
//       products: products,
//       page: 10,
//     });
//   });
// }; // c2: async
module.exports.listProduct = async (req, res, next) => {
  var products = await ProductModel.find();
  try {
    products.foo();
    res.render("products/listProduct", {
      products: products,
      page: 10,
    });
  } catch (error) {
    next(error);
  }
};
