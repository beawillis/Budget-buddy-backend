const router = require("express").Router();

const controller = require("./auth.controller");
const twoFaController = require("./twofa.controller");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const { registerSchema, loginSchema, forgotPasswordSchema, verifyResetCodeSchema, resetPasswordSchema } = require("./auth.validation");

router.post("/register", validate(registerSchema), controller.register);

router.post("/login", validate(loginSchema), controller.login);

router.post("/forgot-password", validate(forgotPasswordSchema), controller.forgotPassword);

router.post("/verify-reset-code", validate(verifyResetCodeSchema), controller.verifyResetCode);

router.post("/reset-password", validate(resetPasswordSchema), controller.resetPassword);

// Two-Factor Authentication Routes (Protected)
router.post("/2fa/setup", auth, twoFaController.setupTwoFactor);

router.post("/2fa/enable", auth, twoFaController.enableTwoFactor);

router.post("/2fa/disable", auth, twoFaController.disableTwoFactor);

router.post("/2fa/verify", twoFaController.verifyTwoFactor);

router.get("/2fa/status", auth, twoFaController.getTwoFactorStatus);

module.exports = router;
