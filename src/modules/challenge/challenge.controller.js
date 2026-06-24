const service =
require(
"./challenge.service"
);

exports.start =
async(
req,
res,
next
)=>{

try{

res.json(

await service.start(

req.user.id,

req.body.expense

)

);

}catch(err){
next(err);
}

};

exports.get =
async(
req,
res,
next
)=>{

try{

res.json(

await service.progress(

req.user.id

)

);

}catch(err){
next(err);
}

};
