const service=
require(
"./investment.service"
);

exports.simulate=
(req,res)=>{

res.json(

service.simulate(

req.body.amount,

req.body.years,

req.body.rate

)

);

};