const express = require("express");
const { tasks: ctrl } = require("../../controllers");
const { controlWrapper } = require("../../middlewares/controlWrapper");
const { validation } = require("../../middlewares");
const { joiTaskSchema, joiTaskCompletedSchema } = require("../../models");
const authTokenValidation = require("../../middlewares/authTokenValid");

const router = express.Router();

router.get('/', authTokenValidation, controlWrapper(ctrl.getAll));

router.post("/", authTokenValidation, validation(joiTaskSchema), controlWrapper(ctrl.addTask));

router.patch("/:taskId/completed", validation(joiTaskCompletedSchema), authTokenValidation, controlWrapper(ctrl.updateTask));

router.delete("/:taskId", authTokenValidation, controlWrapper(ctrl.removeTask));

module.exports = router ;
