const Transaction =
require(
"../transactions/transaction.model"
); //import the Transaction model to perform database operations related to transactions

// get the summary of income, expense, and balance for the authenticated user
exports.summary =
async(
userId
)=>{

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const monthStart = new Date(currentYear, currentMonth, 1);
const monthEnd = new Date(currentYear, currentMonth + 1, 0, 23, 59, 59);

const tx =
await Transaction
.find({
userId
});

// All-time totals
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

// Monthly totals
const monthlyTx = tx.filter(t => {
  const txDate = new Date(t.date || t.createdAt);
  return txDate >= monthStart && txDate <= monthEnd;
});

const monthlyIncome =
monthlyTx
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

const monthlyExpense =
monthlyTx
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
monthlyIncome,
monthlyExpense,
balance:
income-
expense,
monthlyBalance: monthlyIncome - monthlyExpense

};

};