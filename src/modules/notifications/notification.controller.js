const service =
require(
"./notification.service"
);

exports.list =
async(
req,
res,
next
)=>{

try{

res.json(

await service.list(

req.user.id

)

);

}catch(err){
next(err);
}

};
