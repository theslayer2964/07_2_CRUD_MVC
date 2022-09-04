const shortId = require("shortId");

module.exports = (req, res, next) => {
  // nếu user mới -> tạo cookie lìn (Cookie này là sessionId)
  if (!req.signedCookies.sessionId) {
    var id = shortId.generate();
    res.cookie("sessionId", id, {
      signed: true,
    });

    db.get("sessions")
      .push({
        id: id,
      })
      .write();
  }
  next();
};
