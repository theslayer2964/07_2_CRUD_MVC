require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const sesionMidđleware = require("./middlewares/session.middleware");
const cartRouter = require("./routes/Cart.router");
const cartMiddleware = require("./middlewares/cart.middleware");
const tranferRouter = require("./routes/Transfer.router");
var csrf = require("csurf");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);
const productAPI = require("./api/router/product.router");

// tất cả những config của lowdb thì gom ra 1 file -> export -> require
// index và db nằm cùng thư mục thì ./ -> khác thì ../
const port = 3000;
const localhost = "127.0.0.1";
// console.log("Enviroment valiable: ", process.env);
const rootPath = path.resolve();
app.use(express.static("public"));
// app.use(morgan("combined"));
app.set("view engine", "ejs");
app.set("views", `${rootPath}/views`); // default folder: views, đặt sai thì config lại
// sau khi cài xong thì html -> ejs  -> res.render
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Static file: images, css, font, js, document
app.use(express.static("public")); // http://127.0.0.1:3000/styles/style.css
app.use(cookieParser(process.env.secret));
app.use(sesionMidđleware);
app.use(cartMiddleware.checkProductCart);

app.use("/cart", cartRouter);

// cả router thu bé lại vừa bằng 1 dòng code
var userRoutes = require("./routes/user.router");
var cookieRouter = require("./routes/cookie.router");
var authRouter = require("./routes/Auth.router");
var authMiddleware = require("./middlewares/auth.middleware");
var productRouter = require("./routes/Product.router");

app.use("/cookie", cookieRouter);
app.use("/users", authMiddleware.requireAuth, userRoutes);
app.use("/auth", authRouter);
app.use("/", productRouter);
app.use("/transfer", authMiddleware.requireAuth, tranferRouter);
// Validation: lúc thim (POST, xử lí tại controller)
app.use("/api/products", productAPI);

app.use(csrf({ cookie: true })); // middleware

app.listen(port, () => {
  console.log(`Server running at http://${localhost}:${port}`);
});
