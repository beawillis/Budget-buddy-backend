const service =
require(
"./savings.service"
);

exports.start =
async(req,res,next)=>{

try{

const data=
await service.start(
req.user.id,
req.body.target
);

res.json(
data
);

}catch(err){
next(err);
}

};

exports.deposit =
async(req,res,next)=>{

try{

const data=
await service.deposit(
req.user.id,
req.body.amount
);

res.json(
data
);

}catch(err){
next(err);
}

};

exports.status =
async(req,res,next)=>{

try{

const data=
await service.status(
req.user.id
);

res.json(
data
);

}catch(err){
next(err);
}

};
