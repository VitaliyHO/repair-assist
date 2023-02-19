const { Task, joiTaskSchema } = require("./task");
const { User, joiRegisterSchema, joiLoginSchema } = require("./user");

module.exports = {
  Task,
  User,
  joiTaskSchema,
  joiRegisterSchema,
  joiLoginSchema,
};
