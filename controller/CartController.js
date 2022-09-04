module.exports.addToCart = (req, res) => {
  var productId = req.params.productId;
  var sessionId = req.signedCookies.sessionId;
  if (!sessionId) {
    // ko co session -> dia trang chu
    res.redirect("/");
    return;
  }
  var count = db
    .get("sessions")
    .find({ id: sessionId })
    .get("cart." + productId, 0)
    .value();

  db.get("sessions")
    .find({ id: sessionId })
    .set("cart." + productId, count + 1)
    .write();

  res.redirect("/");
};
