const { Task } = require("../../models/task");

async function addTask(req, res) {
  const { text, completed } = req.body;
  const {_id} = req.user;

  const newTask = await Task.create( {text, owner: _id} );

  if (!newTask) {
    res.status(404).json({
      code: 404,
      status: "bad request",
      message: "Can`t create task",
    });
  }

  res.status(201).json({
    code: 201,
    status: "success",
    result: newTask,
  });
}

module.exports = {addTask};