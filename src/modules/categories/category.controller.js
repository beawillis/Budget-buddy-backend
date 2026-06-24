const service =
require(
"./category.service"
);

exports.create =
async(
req,
res,
next
)=>{

try{

const category =

await service.create(

req.user.id,

req.body.name

);

res
.status(201)
.json(
category
);

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

const categories =

await service.list(

req.user.id

);

res.json(
categories
);

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

await service.remove(

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
