const db = require("../db");

module.exports.checkProductCart = function (req, res, next) {
  if (req.signedCookies.sessionId) {
    var listProducts = db
      .get("sessions")
      .find({ id: req.signedCookies.sessionId })
      .get("cart")
      .value();
    var spTrongGioHang = 0;
    if (listProducts != null) {
      for (let [key, value] of Object.entries(listProducts)) {
        spTrongGioHang += value;
      }
    }
    console.log("spTrongGioHang: " + spTrongGioHang);
    res.locals.spTrongGioHang = spTrongGioHang;
  }
  next();
};
