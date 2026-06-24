const service=
require(
"./investment.service"
);

exports.simulate=
(req,res,next)=>{

try{

res.json(

service.simulate(

req.body.amount,

req.body.years,

req.body.rate

)

);

}catch(err){
next(err);
}

};
