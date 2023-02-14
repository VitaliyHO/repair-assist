const { Task } = require("../../models");

async function getAll(req, res) {
  const tasks = await Task.find({});

  if (!tasks) {
    res.status(400).json({
      code: 400,
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
