const { handleUserSignUp, handleUserLogIn } = require("../controllers/user");
const restrictToLoggedInUser = require("../middleware/user");
const passport = require("passport");

const UserRouter = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  app.use("/login", restrictToLoggedInUser);
  app.post("/signup", handleUserSignUp);
  app.post("/login", handleUserLogIn);

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      // session: true],
    }),
    (req, res) => {
      // console.log(res);
      res.redirect("http://localhost:3000");
    }
  );
};

module.exports = UserRouter;
