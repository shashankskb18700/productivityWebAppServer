const { getUser } = require("../services/auth");

async function restrictToLoggedInUser(req, res, next) {
  // const userUid = req.cookie?.uid;

  // if (!userUid) return res.send("please login to proceed");

  // const user = getUser(userUid);

  // if (!user) return res.send("please login to proceed");

  // req.user = user;
  next();
}

module.exports = restrictToLoggedInUser;
