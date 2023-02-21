async function getCurrent(req, res) {
  const { name, email, typeOfUser } = req.user;

  res.status(200).json({
    code: 200,
    status: "success",
    user: { name, email, typeOfUser },
  });
}

module.exports = { getCurrent };
