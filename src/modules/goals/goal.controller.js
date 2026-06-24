const service =
require(
"./goal.service"
);

exports.create =
async(
req,
res
)=>{

const goal =

await service.create(

req.user.id,

req.body

);

res
.status(201)
.json(goal);

};

exports.list =
async(
req,
res
)=>{

res.json(

await service.list(

req.user.id

)

);

};

exports.deposit =
async(
req,
res
)=>{

res.json(

await service
.contribute(

req.params.id,

req.body.amount

)

);

};