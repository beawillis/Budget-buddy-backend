const service =
require(
"./dashboard.service"
); //import the dashboard service to handle business logic related to getting the dashboard data, which includes the wallet summary and a health status based on the balance

// controller function for getting the dashboard data, which calls the dashboard service and sends the appropriate response based on success or error
exports.dashboard =
async(
req,
res
)=>{

try{

const result =

await service.dashboard(

req.user.id

);

res.json(
result
);

}

catch(err){

res
.status(500)
.json({

message:
err.message

});

}

};