const { Task } = require("../../models");

async function getAll(req, res) {
  const {_id} = req.user;
  const tasks = await Task.find({owner: _id});

  if (!tasks || !tasks.length) {
    res.status(404).json({
      code: 404,
      status: "not found",
    });
  }

  res.status(200).json({
    code: 200,
    status: "success",
      result: tasks,
  });
}

module.exports = { getAll };
