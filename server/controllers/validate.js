const jwt = require("jsonwebtoken");

const validateControl = (req, res) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token found" });
  } else {
    jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err, verified) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "Not Auth....Invalid or Expired Token" });
      }
    });
  }
};

module.exports = { validateControl };
