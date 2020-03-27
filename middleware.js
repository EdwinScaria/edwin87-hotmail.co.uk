const jwt = require("jsonwebtoken");
const secret = "mysecretsshhh";

const withAuth = function(req, res, next) {
  const access = req.cookies.token;
  if (!access) {
    res.status(401).send("No token provided");
  } else {
    jwt.verify(access, secret, function(err) {
      if (err) {
        res.status(401).send("Invalid token");
      } else {
        next();
      }
    });
  }
};
module.exports = withAuth;
