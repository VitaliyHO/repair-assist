const express = require("express");
const { tasks: ctrl } = require("../../controllers");
const { controlWrapper } = require("../../middlewares/controlWrapper");
const { validation } = require("../../middlewares");
const { joiTaskSchema } = require("../../models");

const router = express.Router();

router.get('/', controlWrapper(ctrl.getAll));

router.post("/", validation(joiTaskSchema), controlWrapper(ctrl.addTask));

router.patch("/:id/completed", controlWrapper(ctrl.updateTask));

router.delete("/:id", controlWrapper(ctrl.removeTask));

module.exports = router ;
