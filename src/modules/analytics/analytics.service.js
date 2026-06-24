const Transaction =
require(
"../modules/transactions/transaction.model"
);

exports.analyze =
async(
userId
)=>{

const tx =
await Transaction.find({
userId
});

const income =
tx
.filter(
t=>
t.type==="income"
)
.reduce(
(a,b)=>
a+b.amount,
0
);

const expense =
tx
.filter(
t=>
t.type==="expense"
)
.reduce(
(a,b)=>
a+b.amount,
0
);

const savings =
income-
expense;

const savingsRatio =
income
?
(
savings
/
income
)
*
100
:
0;

const health =

savingsRatio
>=
30

?

"Excellent"

:

savingsRatio
>=
10

?

"Moderate"

:

"At Risk";

return{

income,

expense,

savings,

savingsRatio,

health

};

};