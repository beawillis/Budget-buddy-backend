const Transaction =
require(
"./transaction.model"
); //import the Transaction model to interact with the transactions collection in the database

//service functions for creating, retrieving, and deleting transactions
// cretate new transaction
exports.create =

async(
userId,
data
)=>{

return Transaction
.create({

...data,

userId

});

};

// get all transactions
exports.getAll =

async(
userId
)=>{

return Transaction
.find({

userId

})
.sort({

date:-1

});

};

// delete a transaction
exports.remove =

async(
id,
userId
)=>{

return Transaction
.findOneAndDelete({

_id:id,

userId

});

};