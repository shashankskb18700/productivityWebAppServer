const jwt = require("jsonwebtoken");
const secret = "shashnak";

function setUser(user) {
  return jwt.sign(
    {
      _id: user.id,
      email: user.email,
    },
    secret
  );
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}

module.exports = {
  setUser,
  getUser,
};
