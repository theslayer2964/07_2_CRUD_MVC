module.exports.validate = function (req, res, next) {
  var errors = [];
  if (!req.body.name) {
    errors.push("Name is required!");
  }
  if (!req.body.phone) {
    errors.push("Phone is required!");
  }
  if (errors.length) {
    // falsy true: length >0
    res.render("users/create", {
      errors: errors,
      values: req.body, //User sai 1 chỗ thì phải giữ lại tất cả các giá trị cũ cho ngta
    });
    return;
  }
  res.locals.success = true;
  next();
};
