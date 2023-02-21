const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function login(req, res) {
  const { SECRET_KEY } = process.env;
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const comparePass = bcrypt.compareSync(password, user.password);

  if (!user || !comparePass) {
    res.status(400).json({
      code: 400,
      status: "bad request",
    });
    throw new Error();
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await User.findByIdAndUpdate(user.id, { token });

  const { name, typeOfUser } = user;

  res.status(200).json({
    status: "success",
    code: 200,
    result: {
      token,
      user: {
        name,
        email,
        typeOfUser
      },
    },
  });
}

module.exports = {
  login,
};
