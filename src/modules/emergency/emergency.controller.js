const service =
require(
"./emergency.service"
);

exports.get =
async(
req,
res
)=>{

res.json(

await service.calculate(

req.user.id

)

);

};