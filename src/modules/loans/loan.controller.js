const service=
require(
"./loan.service"
);

exports.calculate=
async(
req,
res
)=>{

const result=
await service.calculate(
req.body
);

res.json(result);

};


exports.save=
async(
req,
res
)=>{

const result=
await service.save(
req.user.id,
req.body
);

res.json(result);

};