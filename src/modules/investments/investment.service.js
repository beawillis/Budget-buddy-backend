exports.simulate=(

amount,
years,
rate

)=>{

const future=

amount*

Math.pow(

1+
rate/
100,

years

);

return{

future

};

};