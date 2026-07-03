const speakeasy = require("speakeasy");
const QRCode = require("qrcode");
const User = require("../users/user.model");
const crypto = require("crypto");

// Generate 2FA secret and QR code
exports.setupTwoFactor = async (userId, email) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // Generate secret
  const secret = speakeasy.generateSecret({
    name: `BudgetBuddy (${email})`,
    issuer: "BudgetBuddy",
    length: 32,
  });

  // Generate QR code
  const qrCode = await QRCode.toDataURL(secret.otpauth_url);

  // Generate backup codes (10 codes)
  const backupCodes = Array.from({ length: 10 }, () => 
    crypto.randomBytes(4).toString("hex").toUpperCase()
  );

  return {
    secret: secret.base32,
    qrCode,
    backupCodes,
  };
};

// Enable 2FA
exports.enableTwoFactor = async (userId, secret, verificationCode, backupCodes) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // Verify the code with the secret
  const isValid = speakeasy.totp.verify({
    secret,
    encoding: "base32",
    token: verificationCode,
    window: 2, // Allow 2 time windows (30 seconds each)
  });

  if (!isValid) {
    throw new Error("Invalid verification code");
  }

  // Store the secret and backup codes (hashed)
  user.twoFactorSecret = secret;
  user.twoFactorBackupCodes = backupCodes.map(code => 
    crypto.createHash("sha256").update(code).digest("hex")
  );
  user.twoFactorEnabled = true;
  
  await user.save();

  return { message: "Two-factor authentication enabled successfully" };
};

// Disable 2FA
exports.disableTwoFactor = async (userId, password, bcrypt) => {
  const User = require("../users/user.model");
  const user = await User.findById(userId);
  
  if (!user) {
    throw new Error("User not found");
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  user.twoFactorEnabled = false;
  user.twoFactorSecret = undefined;
  user.twoFactorBackupCodes = [];
  
  await user.save();

  return { message: "Two-factor authentication disabled" };
};

// Verify 2FA code during login
exports.verifyTwoFactor = async (token, secret, backupCodes) => {
  // Check if it's a TOTP code
  const isValidTotp = speakeasy.totp.verify({
    secret,
    encoding: "base32",
    token,
    window: 2,
  });

  if (isValidTotp) {
    return { success: true, type: "totp" };
  }

  // Check if it's a backup code
  const hashedBackupCodes = backupCodes || [];
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  
  const backupCodeIndex = hashedBackupCodes.findIndex(code => code === tokenHash);
  
  if (backupCodeIndex !== -1) {
    return { success: true, type: "backup" };
  }

  throw new Error("Invalid 2FA code");
};

// Get 2FA status
exports.getTwoFactorStatus = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  return {
    enabled: user.twoFactorEnabled || false,
  };
};
