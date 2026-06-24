const User = require("./user.model"); //import the User model from the user.model.js

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