const twoFaService = require("./twofa.service");
const bcrypt = require("bcryptjs");

exports.setupTwoFactor = async (req, res, next) => {
  try {
    const result = await twoFaService.setupTwoFactor(req.user.id, req.user.email);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.enableTwoFactor = async (req, res, next) => {
  try {
    const { secret, verificationCode, backupCodes } = req.body;
    const result = await twoFaService.enableTwoFactor(
      req.user.id,
      secret,
      verificationCode,
      backupCodes
    );
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.disableTwoFactor = async (req, res, next) => {
  try {
    const { password } = req.body;
    const result = await twoFaService.disableTwoFactor(req.user.id, password, bcrypt);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.verifyTwoFactor = async (req, res, next) => {
  try {
    const { token, secret, backupCodes } = req.body;
    const result = await twoFaService.verifyTwoFactor(token, secret, backupCodes);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTwoFactorStatus = async (req, res, next) => {
  try {
    const result = await twoFaService.getTwoFactorStatus(req.user.id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
