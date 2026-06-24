const service =
require(
"./notification.service"
);

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