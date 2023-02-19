const { User } = require('../../models');
const bcrypt = require('bcrypt');

async function register(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    res.status(409).json({
      code: 409,
      status: "conflict",
      message: `User with ${email} already registered.`,
    });
    throw new Error();
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  const newUser = await User.create({ ...req.body, password: hashPassword });

  if (!newUser) {
    res.status(400).json({
      code: 400,
      status: "bad request",
    });
    throw new Error();
  }

  res.status(201).json({
    code: 201,
    status: "create",
    result: newUser,
  });
}

module.exports = {
    register,
};
