const express = require("express");
const UserRouter = require("./routes/user");
const connection = require("./connection");
const userMiddleware = require("./middleware/user");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());

connection("mongodb://127.0.0.1:27017/productivityWebApp");

UserRouter(app);

app.get("/", (req, res) => {
  res.send("<h1> hi </h1>");
});

app.get("/auth", (req, res) => {});

app.listen(5000);
