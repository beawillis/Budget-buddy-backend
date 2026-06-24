const service=
require(
"./loan.service"
);

exports.calculate=
async(
req,
res,
next
)=>{

try{

const result=
await service.calculate(
req.body
);

res.json(result);

}catch(err){
next(err);
}

};


exports.save=
async(
req,
res,
next
)=>{

try{

const result=
await service.save(
req.user.id,
req.body
);

res.json(result);

}catch(err){
next(err);
}

};
