const { Task } = require("../../models");

async function removeTask(req, res) {
  const { _id } = req.user;
  const { taskId } = req.params;

  const task = await Task.findOne({ owner: _id, _id: taskId });

  if (!task) {
    res.status(404).json({
      status: "not found",
      code: 404,
      message: "Not found",
    });
    throw new Error();
  }

  const deletedTask = await Task.findByIdAndRemove(taskId);

  if (!deletedTask) {
    res.status(404).json({
      code: 404,
      status: "not found",
    });
  }

  res.status(200).json({
    code: 200,
    status: "success",
    result: deletedTask,
    message: "The task has been deleted",
  });
}

module.exports = { removeTask };
