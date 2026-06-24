exports.calculate=(
data
)=>{

const amount = data.amount;
const rate = data.interestRate;
const years = data.term;

const r=
rate/
12/
100;

const n=
years*
12;

const payment=

(

amount*r

)/

(

1-
Math.pow(
1+r,
-n
)

);

return{

monthly:
Math.round(payment * 100) / 100,
total: Math.round(payment * n * 100) / 100,
interest: Math.round((payment * n - amount) * 100) / 100

};

};

exports.save =
async(
userId,
data
)=>{

const result = exports.calculate(data);
return {
...data,
...result,
userId
};

};