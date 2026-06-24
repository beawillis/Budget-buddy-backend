const analytics =
require(
"../../services/analytics.service"
);

exports.report =
async(
userId
)=>{

return analytics
.summary(
userId
);

};