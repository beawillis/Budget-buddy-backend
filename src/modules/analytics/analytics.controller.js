const analytics =
require(
"../../services/analytics.service"
);

exports.summary =
async(
req,
res
)=>{

res.json(

await analytics
.analyze(

req.user.id

)

);

};