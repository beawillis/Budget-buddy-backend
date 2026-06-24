const service =
require(
"./savings.service"
);

exports.start =
async(req,res)=>{

const data=
await service.start(
req.user.id,
req.body
);

res.json(
data
);

};