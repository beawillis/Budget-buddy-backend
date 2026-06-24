exports.calculate=(

amount,
rate,
years

)=>{

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
payment

};

};