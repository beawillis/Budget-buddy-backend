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