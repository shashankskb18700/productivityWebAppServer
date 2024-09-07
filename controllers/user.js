const User = require("../model/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../services/auth");

async function handleUserSignUp(req, res) {
  const { username, email, password } = req.body;

  await User.create({ username, email, password });

  // here you just send you are signed up which does note mean anything or after this you should tell them to log in in or  send email for verifcation

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
  return res.cookie("uid", token).redirect("http://localhost:3000");

  //redirect is required
  // return res.send("Your logged in " + token);
}

module.exports = {
  handleUserSignUp,
  handleUserLogIn,
};
