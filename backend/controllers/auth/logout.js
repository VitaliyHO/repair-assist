const { User } = require("../../models");

async function logout(req, res) {
  const { _id } = req.user;

  const user = await User.findByIdAndUpdate(_id, { token: null });

  if (!user) {
    res.status(401).json({
      code: 401,
      status: "not authorized",
    });
    throw new Error();
  }

  res.status(204);
}

module.exports = { logout };
