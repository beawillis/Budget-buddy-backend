exports.simulate=(

principal,
rate,
years

)=>{

const future=

principal*

Math.pow(

1+
rate/
100,

years

);

return{

future: Math.round(future * 100) / 100

};

};