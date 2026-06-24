const service = require("./user.service");

exports.profile =
async(
req,
res,
next
)=>{

try{

const user =

await service
.getProfile(

req.user.id

);

res.json(
user
);

}catch(err){
next(err);
}

};

exports.update =
async(
req,
res,
next
)=>{

try{

const user =

await service
.updateProfile(

req.user.id,

req.body

);

res.json(
user
);

}catch(err){
next(err);
}

};

exports.avatar =
async(
req,
res,
next
)=>{

try{

const user =

await service
.uploadAvatar(

req.user.id,

req.file

);

res.json(
user
);

}catch(err){
next(err);
}

};
