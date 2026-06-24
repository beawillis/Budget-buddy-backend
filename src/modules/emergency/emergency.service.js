const wallet =
require(
"../wallet/wallet.service"
);

exports.calculate =
async(
userId
)=>{

const data =

await wallet.summary(
userId
);

const target =

Math.max(

3000,

data.expense
*
3

);

return{

target,

available:

data.balance,

progress:

Math.min(

100,

(data.balance
/
target)

*
100

)

};

};