const express = require("express");
const UserRouter = require("./routes/user");
const connection = require("./connection");
const userMiddleware = require("./middleware/user");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const passportConfig = require("./services/passport");
const cors = require("cors");
const keys = require("./keys/keys");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(cors());

// connection("mongodb://127.0.0.1:27017/productivityWebApp");

UserRouter(app);

app.get("/auth", (req, res) => {});

app.listen(5000);
