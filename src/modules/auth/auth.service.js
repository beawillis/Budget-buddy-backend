const User = require("../users/user.model"); // Import the user model 
const bcrypt = require("bcryptjs"); //import bcrypt from "bcryptjs" for hashing passwords and comparing hashed passwords

const jwt = require(
"jsonwebtoken"
); //import jwt from "jsonwebtoken" for generating JSON Web Tokens for authentication

//register a new user by checking if the email already exists, hashing the password, creating the user in the database, and generating a JWT token for authentication
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
user._id

},

process.env.JWT_SECRET,

{

expiresIn:
process.env.JWT_EXPIRES

}

);

return {

user,

token

};

};

//login a user by checking if the email exists, comparing the provided password with the hashed password in the database, and generating a JWT token for authentication if the credentials are valid
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
user._id

},

process.env.JWT_SECRET,

{

expiresIn:
process.env.JWT_EXPIRES

}

);

return {

user,

token

};

};