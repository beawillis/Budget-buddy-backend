const service = require("./user.service");//import the user service to handle user-related operations

//profile controller
exports.profile =
async(
req,
res, next
)=>{

const user =

await service
.getProfile(

req.user.id

);

res.json(
user
);

};

//update controller
exports.update =
async(
req,
res, next
)=>{

const user =

await service
.updateProfile(

req.user.id,

req.body

);

res.json(
user
);

};

//upload avatar controller
exports.avatar =
async(
req,
res,next
)=>{

const user =

await service
.uploadAvatar(

req.user.id,

req.file

);

res.json(
user
);

};