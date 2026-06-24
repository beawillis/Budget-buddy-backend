module.exports =

(schema)=>

(req,res,next)=>{

try{

if(!schema){

return next();

}

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

}

catch(err){

next(err);

}

};