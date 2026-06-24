const analytics =
require(
"../../services/analytics.service"
);

exports.summary =
async(
req,
res,
next
)=>{

try{

res.json(

await analytics
.analyze(

req.user.id

)

);

}catch(err){
next(err);
}

};
