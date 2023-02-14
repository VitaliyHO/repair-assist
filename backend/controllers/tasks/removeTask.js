const { Task } = require("../../models");

async function removeTask(req, res) {
    const {id} = req.params;
    const deletedTask = await Task.findByIdAndRemove(id);

    if (!deletedTask) {
        res.status(404).json({
            code:404,
            status: 'not found'
        })
    }

    res.status(200).json({
        code:200,
        status: 'syccess',
        result: deletedTask,
        message: "The task has been deleted"
    })
};

module.exports = {removeTask}