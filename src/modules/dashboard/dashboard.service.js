const wallet =
require(
"../wallet/wallet.service"
); //import the wallet service to get the summary of the user's financial health for the dashboard

// controller function for getting the dashboard data, which includes the wallet summary and a health status based on the balance
exports.dashboard =
async(
userId
)=>{

const summary =

await wallet
.summary(
userId
);

return{

wallet:
summary,

health:

summary.balance
>
0

?

"Good"

:

"Needs Attention"

};

};