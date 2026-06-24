const service =
require(
"./emergency.service"
);

exports.get =
async(
req,
res,
next
)=>{

try{

res.json(

await service.calculate(

req.user.id

)

);

}catch(err){
next(err);
}

};
