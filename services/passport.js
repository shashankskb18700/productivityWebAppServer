const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../keys/keys");

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(profile);
      console.log(refreshToken);
      done(null, profile);
    }
  )
);
