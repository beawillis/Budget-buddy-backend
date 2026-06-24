const analytics =
require(
"../analytics/analytics.service"
);

const ai =
require(
"../../services/ai.service"
);

exports.chat =
async(
userId
)=>{

const stats =

await analytics
.analyze(
userId
);

return ai
.answer(
stats
);

};