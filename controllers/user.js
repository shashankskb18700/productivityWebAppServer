const User = require("../model/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../services/auth");

async function handleUserSignUp(req, res) {
  console.log(req.body);
  const { name, email, password } = req.body;

  User.create({ name, email, password });

  return res.send("Your sigind up");
}

async function handleUserLogIn(req, res) {
  console.log(req.body);

  const { name, email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.send("your email or password is wrong");
  }

  const token = setUser(user);
  res.cookie("uid", token);

  return res.send("Your logged in " + token);
}

module.exports = {
  handleUserSignUp,
  handleUserLogIn,
};
