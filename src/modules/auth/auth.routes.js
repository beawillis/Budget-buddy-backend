const router = require("express").Router();

const controller = require("./auth.controller");
const validate = require("../../middlewares/validate");
const { registerSchema, loginSchema, forgotPasswordSchema, verifyResetCodeSchema, resetPasswordSchema } = require("./auth.validation");

router.post("/register", validate(registerSchema), controller.register);

router.post("/login", validate(loginSchema), controller.login);

router.post("/forgot-password", validate(forgotPasswordSchema), controller.forgotPassword);

router.post("/verify-reset-code", validate(verifyResetCodeSchema), controller.verifyResetCode);

router.post("/reset-password", validate(resetPasswordSchema), controller.resetPassword);

module.exports = router;
