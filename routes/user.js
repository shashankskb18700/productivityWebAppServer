const { handleUserSignUp, handleUserLogIn } = require("../controllers/user");
const restrictToLoggedInUser = require("../middleware/user");

const UserRouter = (app) => {
  app.use("/login", restrictToLoggedInUser);
  app.post("/signup", handleUserSignUp);

  app.post("/login", handleUserLogIn);
};

module.exports = UserRouter;
