const { Task, joiTaskSchema, joiTaskCompletedSchema } = require("./task");
const { User, joiRegisterSchema, joiLoginSchema } = require("./user");

module.exports = {
  Task,
  User,
  joiTaskSchema,
  joiRegisterSchema,
  joiLoginSchema,
  joiTaskCompletedSchema,
};
