const service=
require(
"./investment.service"
);

exports.simulate=
(req,res,next)=>{

try{

res.json(

service.simulate(

req.body.principal,

req.body.rate,

req.body.years

)

);

}catch(err){
next(err);
}

};
