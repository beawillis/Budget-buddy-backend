const service =
require(
"./assistant.service"
);

exports.chat =
async(
req,
res
)=>{

res.json(

await service.chat(

req.user.id

)

);

};