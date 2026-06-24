const Transaction =
require(
"../modules/transactions/transaction.model"
);

exports.summary =
async(
userId
)=>{

const tx =

await Transaction.find({

userId

});

let income = 0;

let expense = 0;

tx.forEach(

t=>{

if(
t.type
===
"income"
){

income +=
t.amount;

}

if(
t.type
===
"expense"
){

expense +=
t.amount;

}

}

);

const savings =

income
-
expense;

const savingsRatio =

income
?
(
savings
/
income
)
:
0;

const healthScore =

Math.max(

0,

Math.min(

100,

Math.round(

(
savingsRatio
*
70
)
+
30

)

)

);

return{

income,

expense,

savings,

healthScore,

transactions:

tx.length

};

};