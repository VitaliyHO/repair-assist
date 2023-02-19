const { User } = require("../models");
const jwt = require("jsonwebtoken");

async function authTokenValidation(req, res, next) {
  const { SECRET_KEY } = process.env;
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    if (bearer !== "Bearer" || !token) {
      res.status(401).json({
        status: "unauthorized",
        code: 401,
      });
    }

    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token) {
      res.status(401).json({
        status: "unauthorized",
        code: 401,
      });
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === "invalid signature") {
      error.status = 401;
    }
    res.status(401).json({ message: "Not authorized" });
    next(error);
  }
}

module.exports = authTokenValidation;
