const service =
require(
"./transaction.service"
);

exports.create =
async(
req,
res,
next
)=>{

try{

const tx =

await service
.create(

req.user.id,

req.body

);

res
.status(201)
.json(tx);

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

const tx =

await service
.getAll(

req.user.id

);

res.json(tx);

}catch(err){
next(err);
}

};

exports.remove =
async(
req,
res,
next
)=>{

try{

await service
.remove(

req.params.id,

req.user.id

);

res.json({

success:true

});

}catch(err){
next(err);
}

};
