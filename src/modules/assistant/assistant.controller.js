const service =
require(
"./assistant.service"
);

exports.chat =
async(
req,
res,
next
)=>{

try{

res.json(

await service.chat(

req.user.id

)

);

}catch(err){
next(err);
}

};
