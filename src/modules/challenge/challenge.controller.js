const service =
require(
"./challenge.service"
);

exports.start =
async(
req,
res
)=>{

res.json(

await service.start(

req.user.id,

req.body.expense

)

);

};

exports.get =
async(
req,
res
)=>{

res.json(

await service.progress(

req.user.id

)

);

};