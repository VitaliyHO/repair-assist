const Joi = require("joi");
const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    typeOfUser: {
      type: String,
      enum: ["customer", "master", "foreman"],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().min(6).max(30).required(),
  typeOfUser: Joi.string().required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().min(6).max(30).required(),
});

const User = model("users", userSchema);

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema
};
