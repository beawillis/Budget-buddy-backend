const Transaction =
require(
"../transactions/transaction.model"
); //import the Transaction model to perform database operations related to transactions

// get the summary of income, expense, and balance for the authenticated user
exports.summary =
async(
userId
)=>{

const tx =

await Transaction
.find({

userId

});

const income =

tx
.filter(
x=>
x.type==="income"
)

.reduce(

(a,b)=>

a+
b.amount,

0

);

const expense =

tx
.filter(
x=>
x.type==="expense"
)

.reduce(

(a,b)=>

a+
b.amount,

0

);

return{

income,

expense,

balance:

income-
expense

};

};