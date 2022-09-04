const db = require("../db");
const shortId = require("shortid");
module.exports.showFormCreate = (req, res, next) => {
  console.log("DODODO");
  // console.log(" token: " + req.csrfToken());
  res.render("transfer/create2", {
    csrfToken: req.csrfToken(), // method mới của req
  });
};
module.exports.create = (req, res, next) => {
  // c1:
  // req.body.id = shortId.generate();
  // db.get("transfers").push(req.body).write();
  var data = {
    id: shortId.generate(),
    amount: parseInt(req.body.amount),
    accountId: req.body.acountId,
    userId: req.signedCookies.userId, // cookie nguoi gui
  };
  db.get("transfers").push(data).write();
  res.redirect("/transfer");
};
