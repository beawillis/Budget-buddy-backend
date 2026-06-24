const service =
require(
"./transaction.service"
); //import the transaction service to handle business logic related to transactions

// controller function for creating transaction
exports.create =
async(
req,
res
)=>{

const tx =

await service
.create(

req.user.id,

req.body

);

res
.status(201)
.json(tx);

};

// controller function for listing all transactions of the authenticated user
exports.list =
async(
req,
res
)=>{

const tx =

await service
.getAll(

req.user.id

);

res.json(tx);

};

// controller function for deleting a transaction by its ID, ensuring that the transaction belongs to the authenticated user
exports.remove =
async(
req,
res
)=>{

await service
.remove(

req.params.id,

req.user.id

);

res.json({

success:true

});

};