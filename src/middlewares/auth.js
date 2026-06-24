const jwt = require("jsonwebtoken");//import jwt from "jsonwebtoken" for verifying JSON Web Tokens for authentication


module.exports =

(
req,
res,
next
)=>{

try{

const token =

req.headers
.authorization
?.split(" ")[1];

if(!token){

return res
.status(401)
.json({

message:
"No token"

});

}

const decoded =

jwt.verify(

token,

process.env.JWT_SECRET

);

req.user =
decoded;

next();

}

catch{

res.status(401)
.json({

message:
"Unauthorized"

});

}

};