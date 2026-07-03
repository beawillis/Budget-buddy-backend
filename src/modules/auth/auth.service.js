const User = require("../users/user.model");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { Resend } = require("resend");

const jwt = require(
"jsonwebtoken"
);

const resend = new Resend(process.env.RESEND_API_KEY);

const sendResetEmail = async(to, code)=>{

try {

const result = await resend.emails.send({

from: process.env.EMAIL_FROM || "noreply@budgetbuddy.app",

to,

subject: "BudgetBuddy Password Reset Code",

html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; margin-bottom: 30px; }
    .code-box { background: #f0e7fe; border-left: 4px solid #7c3aed; padding: 20px; margin: 20px 0; text-align: center; }
    .code { font-size: 32px; font-weight: bold; color: #7c3aed; letter-spacing: 4px; }
    .footer { color: #666; font-size: 12px; margin-top: 20px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="color: #7c3aed;">BudgetBuddy</h2>
      <p style="color: #666;">Password Reset Request</p>
    </div>
    <p>Hi there,</p>
    <p>You requested to reset your BudgetBuddy password. Use this code to complete the reset:</p>
    <div class="code-box">
      <div class="code">${code}</div>
    </div>
    <p style="color: #666; font-size: 14px;">This code expires in <strong>10 minutes</strong>.</p>
    <p style="color: #666; font-size: 14px;">If you didn't request this, please ignore this email or contact support.</p>
    <div class="footer">
      <p>&copy; 2024 BudgetBuddy. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`

});

if (result.error) {

console.error("Resend API error:", result.error);

}

} catch(emailError) {

console.error("Email send failed:", emailError.message);

// Still allow password reset to proceed - code is stored in DB

}

};

exports.register =
async(data)=>{

const exists =

await User.findOne({

email:
data.email

});

if(exists){

throw new Error(
"User exists"
);

}

const hash =

await bcrypt.hash(
data.password,
10
);

const user =

await User.create({

...data,

password:
hash

});

const token =

jwt.sign(

{

id:
user._id,

role:
user.role

},

process.env.JWT_SECRET,

{

expiresIn:
process.env.JWT_EXPIRES

}

);

const userObj = user.toObject();
delete userObj.password;

return {

user: userObj,

token

};

};

exports.login =
async(
email,
password
)=>{

const user =

await User.findOne({

email

});

if(!user){

throw new Error(
"Invalid credentials"
);

}

const valid =

await bcrypt.compare(

password,

user.password

);

if(!valid){

throw new Error(
"Invalid credentials"
);

}

const token =

jwt.sign(

{

id:
user._id,

role:
user.role

},

process.env.JWT_SECRET,

{

expiresIn:
process.env.JWT_EXPIRES

}

);

const userObj = user.toObject();
delete userObj.password;

return {

user: userObj,

token

};

};
exports.forgotPassword = async(email)=>{

const normalizedEmail = email.toLowerCase();

const user = await User.findOne({ email: normalizedEmail });

if(!user){

return { message: "If that email exists, a reset code has been sent." };

}

const code = crypto.randomInt(100000, 999999).toString();

user.resetCode = code;

user.resetCodeExpires = Date.now() + 10 * 60 * 1000;

await user.save();

// Send email but don't fail if it doesn't work
await sendResetEmail(user.email, code);

return { message: "Password reset code sent to your email.", code: process.env.NODE_ENV === "development" ? code : undefined };

};

exports.verifyResetCode = async(email, code)=>{

const user = await User.findOne({ email: email.toLowerCase() });

if(!user || !user.resetCode || !user.resetCodeExpires || user.resetCodeExpires < Date.now()){

throw new Error("Reset code is invalid or expired.");

}

if(user.resetCode !== code){

throw new Error("Reset code is incorrect.");

}

return { message: "Reset code verified successfully." };

};

exports.resetPassword = async(email, code, newPassword)=>{

const user = await User.findOne({ email: email.toLowerCase() });

if(!user || !user.resetCode || !user.resetCodeExpires || user.resetCodeExpires < Date.now()){

throw new Error("Reset code is invalid or expired.");

}

if(user.resetCode !== code){

throw new Error("Reset code is incorrect.");

}

const hash = await bcrypt.hash(newPassword, 10);

user.password = hash;

user.resetCode = undefined;

user.resetCodeExpires = undefined;

await user.save();

return { message: "Password updated successfully." };

};