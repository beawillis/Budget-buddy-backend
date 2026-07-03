const User = require("./user.model"); //import the User model from the user.model.js
const bcrypt = require("bcryptjs");

// get profile
exports.getProfile =

async(id)=>{

return User
.findById(id)
.select(
"-password"
);

};

// update profile
exports.updateProfile =

async(
id,
data
)=>{

return User
.findByIdAndUpdate(

id,

data,

{

new:true

}

)
.select(
"-password"
);

};

// upload avatar
exports.uploadAvatar =

async(
id,
file
)=>{

return User
.findByIdAndUpdate(

id,

{

avatar:{

url:
file.path,

publicId:
file.filename

}

},

{

new:true

}

);

};

// change password
exports.changePassword = async(id, currentPassword, newPassword) => {
  const user = await User.findById(id);
  
  if (!user) {
    throw new Error("User not found");
  }

  // Verify current password
  const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
  
  if (!isPasswordValid) {
    throw new Error("Current password is incorrect");
  }

  // Hash new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  
  // Update password
  user.password = hashedPassword;
  await user.save();

  return { message: "Password changed successfully" };
};