const User = require("../users/user.model");
const bcrypt = require("bcryptjs");

const jwt = require(
"jsonwebtoken"
);

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
