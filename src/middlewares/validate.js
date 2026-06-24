module.exports =

(schema)=>

(req,res,next)=>{

try{

if(!schema){

return next();

}

if(typeof schema.validate === "function"){

const {

error

} =

schema
.validate(

req.body,

{

abortEarly:false

}

);

if(error){

return res
.status(400)
.json({

success:false,

message:

error.details
.map(

e=>
e.message

)

});

}

next();

} else if(typeof schema.safeParse === "function"){

const result = schema.safeParse(req.body);

if(!result.success){

return res
.status(400)
.json({

success:false,

message:
result.error.issues.map(
e=> e.message
)

});

}

req.body = result.data;
next();

} else {

next();

}

}

catch(err){

next(err);

}

};
