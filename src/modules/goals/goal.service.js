const Goal =
require(
"./goal.model"
);

const email = require("../../services/email.service");
const User = require("../users/user.model");

exports.create =
async(
userId,
data
)=>{

return Goal.create({

...data,

userId

});

};

exports.list =
async(
userId
)=>{

return Goal.find({

userId

});

};

exports.contribute =
async(
goalId,
amount
)=>{

const goal =
await Goal.findById(
goalId
);

goal.saved += amount;

if(
goal.saved
>=
goal.target
){

goal.status =
"completed";

}

await goal.save();

return goal;

};