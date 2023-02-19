const express = require('express');
const {controlWrapper, validation} = require('../../middlewares');
const {auth: ctrl} = require('../../controllers');
const { joiRegisterSchema, joiLoginSchema } = require('../../models');
const authTokenValidation = require('../../middlewares/authTokenValid');


const router = express.Router();

router.post("/register", validation(joiRegisterSchema), controlWrapper(ctrl.register));

router.post("/login", validation(joiLoginSchema), controlWrapper(ctrl.login));

router.get("/logout", authTokenValidation, controlWrapper(ctrl.logout));


module.exports = router;