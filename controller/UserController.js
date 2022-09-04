// module.exports = {
//     a:1,
//     b:1
// }
// module.exports.a = 1;
// Như nhau -> module.exports hoạt động như 1 Object -> key-value
// Tạo ra mô hình MVC: ta bỏ tát cả phần xử lí DB xuống controller
var db = require("../db");
var shortid = require("shortid");
module.exports.index = function (req, res) {
  console.log("cookie: " + JSON.stringify(req.cookies).toString());
  res.render("users/list_user", {
    users: db.get("users").value(),
  });
};
module.exports.showFormCreate = (req, res) => {
  res.render("users/create");
};
module.exports.createUser = (req, res) => {
  req.body.id = shortid.generate();
  // console.log(
  //   "Data nhan dc tu Middleware truoc: " + JSON.stringify(res.locals).toString()
  // );
  console.log(req.file.path);
  var path = req.file.path.replace("public\\", "");
  console.log("KQ: " + path);
  req.body.avatar = path;
  db.get("users").push(req.body).write();
  res.redirect("/users"); // điều hướng đến url nào, ko phải là tới ejs
};
module.exports.getDetailInfo = (req, res) => {
  var id = req.params.id;
  var user = db.get("users").find({ id: id }).value();
  res.render("users/user-detail", {
    user: user,
  });
};
