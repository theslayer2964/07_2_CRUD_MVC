// Spring Authentication
// tất cả các trang chưa đăng nhập đều được điều hướng đến trang đăng nhập (trừ trang đăng nhập)
// Function này đặt trước tất cả các function khác khởi chạy -> phải qua nó mới chạy đi đc
// Công dụng: sau khi user login -> cookie -> check coi có cookie hem
var db = require("../db");
module.exports.requireAuth = function (req, res, next) {
  console.log("signcookie: ", req.signedCookies, "\n", "Cookie: ", req.cookies);
  if (!req.signedCookies.userId) {
    res.redirect("/auth/login");
    return;
  }
  var user = db.get("users").find({ id: req.signedCookies.userId }).value();
  if (!user) {
    res.redirect("/auth/login");
    return;
  }
  res.locals.user = user;
  next();
};
// Tât cả những gì lưu tại browser đều có thể bị sửa đổi bởi người dùng -> đoán được
// cái userId mìn lưu -> hack, dô đc tài khoản người khác -> cần protect
// password: phải mã hóa
