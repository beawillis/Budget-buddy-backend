const service =
require(
"./wallet.service"
); //import the wallet service to handle business logic related to wallet operations such as getting the summary of income, expense, and balance for the authenticated user

// controller function for getting the wallet summary, which calls the wallet service and sends the appropriate response based on success or error
exports.summary =
async(
req,
res
)=>{

try{

const data =

await service.summary(
req.user.id
);

res.json(
data
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