const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const UserRouter = require("./routes/user");
const connection = require("./connection");
const userMiddleware = require("./middleware/user");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const passportConfig = require("./services/passport");
const cors = require("cors");
const keys = require("./keys/keys");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("user connected");
  console.log(socket.id);
  socket.on("send-change", (delta) => {
    // console.log(delta);
    socket.broadcast.emit("recevied-change", delta);
  });
});

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

server.listen(5000);
