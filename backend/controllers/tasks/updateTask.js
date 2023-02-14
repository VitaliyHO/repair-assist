const { Task } = require("../../models");

async function updateTask(req, res) {
  const { id } = req.params;
  
  const task = await Task.findById(id);

  if (!task) {
    res.status(404).json({
      code: 404,
      status: "not found",
    });
  };

  const { completed } = task;

  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { completed: !completed },
    { new: true }
  );

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
