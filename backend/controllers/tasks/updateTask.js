const { Task } = require("../../models");

async function updateTask(req, res) {
  const { _id } = req.user;
  const { taskId } = req.params;
  const { completedStatus } = req.body;

  const task = await Task.findOne({ owner: _id, _id: taskId });

  if (!task) {
    res.status(404).json({
      code: 404,
      status: "not found",
    });
  }

  const updatedTask = await Task.findByIdAndUpdate(taskId, {completed: completedStatus}, {
    new: true,
  });

  if (!updatedTask) {
    res.status(400).json({
      code: 400,
      status: "bad request",
    });
  }

  res.status(200).json({
    code: 200,
    status: "success",
    result: updatedTask,
  });
}

module.exports = { updateTask };
