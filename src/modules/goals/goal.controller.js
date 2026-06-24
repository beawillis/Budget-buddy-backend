const service =
require(
"./goal.service"
);

exports.create =
async(
req,
res,
next
)=>{

try{

const goal =

await service.create(

req.user.id,

req.body

);

res
.status(201)
.json(goal);

}catch(err){
next(err);
}

};

exports.list =
async(
req,
res,
next
)=>{

try{

res.json(

await service.list(

req.user.id

)

);

}catch(err){
next(err);
}

};

exports.deposit =
async(
req,
res,
next
)=>{

try{

res.json(

await service
.contribute(

req.params.id,

req.body.amount

)

);

}catch(err){
next(err);
}

};
