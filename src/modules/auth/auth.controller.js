const service =
require(
"./auth.service"
);

// register controller to handle user registration by validating the request body, calling the register service, and sending the appropriate response
exports.register =
async(
req,
res,
next
)=>{

try{

const result =

await service.register(
req.body
);

res.status(201)
.json(result);

}

catch(err){

res.status(400)
.json({

message:
err.message

});

}

};

// login controller to handle user login by validating the request body, calling the login service, and sending the appropriate response
exports.login =
async(
req,
res,
next
)=>{

try{

const result =

await service.login(

req.body.email,

req.body.password

);

res.json(
result
);

}

catch(err){

res.status(400)
.json({

message:
err.message

});

}

};

exports.forgotPassword = async(req,res,next)=>{

try{

const result = await service.forgotPassword(req.body.email);

res.json(result);

}

catch(err){

res.status(400).json({ message: err.message });

}

};

exports.verifyResetCode = async(req,res,next)=>{

try{

const result = await service.verifyResetCode(req.body.email, req.body.code);

res.json(result);

}

catch(err){

res.status(400).json({ message: err.message });

}

};

exports.resetPassword = async(req,res,next)=>{

try{

const result = await service.resetPassword(req.body.email, req.body.code, req.body.newPassword);

res.json(result);

}

catch(err){

res.status(400).json({ message: err.message });

}

};