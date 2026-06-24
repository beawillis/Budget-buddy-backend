const Savings=
require(
"./savings.model"
);


// START CHALLENGE
exports.start=
async(
userId,
target
)=>{

const exists=
await Savings.findOne({
user:userId,
status:"active"
});

if(exists){

throw new Error(
"Active challenge already exists"
);

}

return await Savings.create({

user:userId,
target

});

};



// DEPOSIT

exports.deposit=
async(
userId,
amount
)=>{

const challenge=
await Savings.findOne({

user:userId,
status:"active"

});

if(!challenge){

throw new Error(
"No active savings challenge"
);

}

challenge.saved+=amount;


// COMPLETE

if(
challenge.saved>=
challenge.target
){

challenge.status=
"completed";

}

await challenge.save();

return challenge;

};



// STATUS

exports.status=
async(
userId
)=>{

const data=
await Savings.findOne({

user:userId,
status:"active"

});

if(!data){

return null;

}

const percent=
(
data.saved/
data.target
)*100;

return{

target:
data.target,

saved:
data.saved,

remaining:
data.target-data.saved,

progress:
percent.toFixed(1),

status:
data.status

};

};




// RECOMMENDATION ENGINE

exports.recommend=
async(
userId
)=>{

const data=
await Savings.findOne({

user:userId,
status:"active"

});

if(!data){

return{

message:
"Create savings goal"

};

}

const remaining=
data.target-
data.saved;

return{

message:
`Save ${
Math.ceil(
remaining/30
)
} daily`

};

};